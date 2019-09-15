import axios from 'axios';


const searchAPI = `https://www.food2fork.com/api/get?key=`;

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        const apiKey = `bc7e1f81fdb11fb6d964e2ee6ebc58aa`;
        // const apiKey = `c0e904199ae29881ef6086c0ed2e1d5d`;
        try {
            const recipe = await axios(`${searchAPI}${apiKey}&rId=${this.id}`);
            this.image = recipe.data.recipe.image_url;
            this.ingredients = recipe.data.recipe.ingredients;
            this.publisher = recipe.data.recipe.publisher;
            this.title = recipe.data.recipe.title;

            console.log(recipe);
        } catch(err) {
            alert(err);
        }
    }

    calcServings() {
        this.servingsCount = 1;
    }
}