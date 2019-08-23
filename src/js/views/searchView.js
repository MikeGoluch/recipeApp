const renderResults = (recipes) => {
    const markup = `
        <li>
            <a class="results__link" href="#${recipes.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipes.image_url}" alt="${recipes.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${shortenTheTitle(recipes.title)}</h4>
                    <p class="results__author">${recipes.publisher}</p>
                </div>
            </a>
        </li>
    `;
    document.querySelector('.results__list').insertAdjacentHTML('beforeend', markup);
};

export const displayListResults = (recipes, curPage = 1, resPerPage = 10) => {
    const begin = (curPage - 1) * resPerPage;
    const end = curPage * resPerPage;
    recipes.slice(begin, end).forEach(el => {
        renderResults(el);
    });
    displayBtn(recipes, curPage, resPerPage);
};

export const clearResults = () => {
    document.querySelector('.results__list').innerHTML = "";
}

export const clearInputField = () => {
    document.querySelector('.search__field').value = "";
}

export const displayLoader = () => {
    const markup = `
        <div class="loader">
            <svg>
                <use xlink:href="./img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    document.querySelector('.results').insertAdjacentHTML('afterbegin', markup);
}

export const clearLoader = () => {
    const parent = document.querySelector('.results');
    const child = document.querySelector('.loader');
    parent.removeChild(child);
}

const shortenTheTitle = (text, limit = 17) => {
    let array = [];
    if (text.length >= limit) {
        const titleSplit = text.split(' ');
        // console.log(titleSplit);
        titleSplit.reduce((acc, cur) => {
            if (acc + cur.length < limit) {
                array.push(cur);
            }
            return acc + cur.length;
        },0);
        return `${array.join(' ')} ...`;
    }
    return text;
}

const createBtn = (curPage, btnType) => {
    const btn = `
            <button class="btn-inline results__btn--${btnType}">
                <span>Page ${btnType === 'prev' ? curPage - 1 : curPage + 1}</span>
                <svg class="search__icon">
                    <use href="img/icons.svg#icon-triangle-${btnType === 'prev' ? 'left' : 'right'}"></use>
                </svg>
            </button>
    `;

    return btn;
}

const displayBtn = (recipes, curPage, resPerPage ) => {
    const totalPages = Math.ceil(recipes.length / resPerPage);
    let btn;
    //pierwsza strona --> przycisk na drugą stronę
    if (totalPages > 1 && curPage === 1) {
        btn = createBtn(curPage, 'next');
    } else if (curPage < totalPages) {
        btn = `
            ${createBtn(curPage, 'prev')}
            ${createBtn(curPage, 'next')}
        `;
    } else if (totalPages > 1 && curPage === totalPages) {
        btn = createBtn(curPage, 'prev');
    }
    document.querySelector('.results__pages').insertAdjacentHTML('beforeend', btn);
}