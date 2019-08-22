import Search from './models/Search';
import { displayListResults, clearResults, clearInputField, displayLoader, clearLoader } from './views/searchView';


let store = {};

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    const inputFieldVal = document.querySelector('.search__field').value;
    clearResults();
    searchController(inputFieldVal);
    clearInputField();
    // console.log(e.target);
    
});

    // console.log(inputFieldVal);

const searchController = async (input) => {
    store.search = new Search(input);
    displayLoader();
    await store.search.searchRecipe();
    clearLoader();
    console.log(store.search.results);
    displayListResults(store.search.results);
}
