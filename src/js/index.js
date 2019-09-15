import Search from './models/Search';
import Recipe from './models/Recipe';
import { displayListResults, clearResults, clearInputField, displayLoader, clearLoader, displayBtn, clearBtnResults } from './views/searchView';
import { recipeMarkup, displayIngredients, clearRecipeResults } from './views/searchRecipe';


let store = {};

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    const inputFieldVal = document.querySelector('.search__field').value;
    clearResults();
    searchController(inputFieldVal);
    clearInputField();
    // console.log(e.target);
    
});

const searchController = async (input) => {
    store.search = new Search(input);
    displayLoader();
    await store.search.searchRecipe();
    clearLoader();
    // console.log(store.search.results);
    displayListResults(store.search.results);
    // displayBtn(store.search.results,);
}

document.querySelector('.results__pages').addEventListener('click', e => {
    const btnCLick = e.target.closest('.btn-inline');
    const nextPage = parseInt(btnCLick.dataset.nextpage);
    clearResults();
    clearBtnResults();
    displayListResults(store.search.results, nextPage);
});

const recipeController = async (id) => {
    store.recipe = new Recipe(id);
    displayLoader();
    await store.recipe.getRecipe();
    clearLoader();
    clearRecipeResults();
    store.recipe.calcServings();
    recipeMarkup(store.recipe);
    console.log(store.recipe);
    displayIngredients(store.recipe);

};

window.addEventListener('hashchange', () => {
    console.log(window.location.hash);
    recipeController(window.location.hash.substring(1));
});

document.querySelector('.recipe').addEventListener('click', (e) => {
    let servings = parseInt(document.querySelector('.recipe__info-data--people').textContent, 10);
    console.log('test1',servings);
    const btnMinus = e.target.closest('.btn-minus');
    const btnPlus = e.target.closest('.btn-plus');
    if (btnPlus) {
        document.querySelector('.recipe__info-data--people').innerHTML = String(servings + 1);
    } else if (btnMinus && servings > 1) {
        document.querySelector('.recipe__info-data--people').innerHTML = String(servings - 1);
    }
})