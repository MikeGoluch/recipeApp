import axios from 'axios';


const searchAPI = `https://www.food2fork.com/api/search?key=`;


export default class Search {
    constructor(query) {
        this.query = query;
    }

    async searchRecipe() {
        const apiKey = `bc7e1f81fdb11fb6d964e2ee6ebc58aa`;
        // const apiKey = `c0e904199ae29881ef6086c0ed2e1d5d`;
        try {
            const recipe = await axios(`${searchAPI}${apiKey}&q=${this.query}`);
            this.results = recipe.data.recipes;
            // console.log(this.results);
        } catch(err) {
            alert(err);
        }
    }
}