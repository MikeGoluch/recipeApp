import Search from './models/Search';
import { displayListResults } from './views/searchView';


let store = {};

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    const inputFieldVal = document.querySelector('.search__field').value;

    searchController(inputFieldVal);
    // console.log(e.target);
    
});

    // console.log(inputFieldVal);

const searchController = async (input) => {
    store.search = new Search(input);
    await store.search.searchRecipe();
    console.log(store.search.results);
    displayListResults(store.search.results);
}
