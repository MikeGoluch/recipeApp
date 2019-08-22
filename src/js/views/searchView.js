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

export const displayListResults = (recipes) => {
    recipes.forEach(el => {
        renderResults(el);
    });
};


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