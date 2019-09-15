export const recipeMarkup = (recipe) => {
    const markup = `
    <figure class="recipe__fig">
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img">
        <h1 class="recipe__title">
            <span>${recipe.title}</span>
        </h1>
    </figure>
    <div class="recipe__details">
        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-stopwatch"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">45</span>
            <span class="recipe__info-text"> minutes</span>
        </div>
        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-man"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.servingsCount}</span>
            <span class="recipe__info-text"> servings</span>

            <div class="recipe__info-buttons">
                <button class="btn-tiny btn-minus">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-minus"></use>
                    </svg>
                </button>
                <button class="btn-tiny btn-plus">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-plus"></use>
                    </svg>
                </button>
            </div>

        </div>
        <button class="recipe__love">
            <svg class="header__likes">
                <use href="img/icons.svg#icon-heart-outlined"></use>
            </svg>
        </button>
    </div>
    <div class="recipe__ingredients">
        <ul class="recipe__ingredient-list">
        </ul>

        <button class="btn-small recipe__btn">
            <svg class="search__icon">
                <use href="img/icons.svg#icon-shopping-cart"></use>
            </svg>
            <span>Add to shopping list</span>
        </button>
    </div>
    `;
    document.querySelector('.recipe').insertAdjacentHTML('afterbegin', markup);
};

const ingredientsList = (amount = "", ingredient) => {
    const markup = `
    <li class="recipe__item">
        <svg class="recipe__icon">
            <use href="img/icons.svg#icon-check"></use>
        </svg>
        <div class="recipe__count">
            ${amount}
        </div>
        <div class="recipe__ingredient">
            <span class="recipe__unit">${ingredient}</span>
        </div>
    </li>
    `;
    document.querySelector('.recipe__ingredient-list').insertAdjacentHTML('beforeend', markup);
}

export const displayIngredients = (recipe) => {
    recipe.ingredients.map(el => {
        if (!isNaN(parseInt(el[0]))) {
            const parts = el.split(' ');
            let [firstEl, restEl] = [parts[0], parts.slice(1).join(' ')];
            const split = firstEl.split('/');
            if (split.length > 1) {
                firstEl = parseFloat((split[0] / split[1]).toFixed(2));
            } else {
                firstEl = parseInt(split[0]);
            }
            ingredientsList(firstEl, restEl)
        } else {
            ingredientsList(undefined, el);
        }
      });
};

export const clearRecipeResults = () => {
    document.querySelector('.recipe').innerHTML = "";
};




