

const form = document.querySelector('.js-search-form')
const list = document.querySelector('.js-articles-container')
const btn = document.querySelector('[data-action="load-more"]')

function searchImg(query, page=1){
    return fetch(`https://pixabay.com/api/?key=39468661-17ed1ca810add5b1a379b5e02&q=${query}&page=${page}&per-page=20`)
    .then((res)=>res.json())
    .then((res)=>res.hits)
}

form.addEventListener('submit', onFormSubmit)
function onFormSubmit(event){
    event.preventDefault()
    const searchQuery = event.currentTarget.elements.query.value;
    searchImg(searchQuery).then((hits)=>{createMarkup(hits)})
}
// // btn.addEventListener('click', onBtnClick)
 function createMarkup(hits) {  
    const markup = hits.map(({previewURL})=> ` <li><img src="${previewURL}" alt=""></li>` ).join( " ")
    console.log(markup)
     list.insertAdjacentHTML('beforeend', markup)  
}