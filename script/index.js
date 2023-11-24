import {createArticleElement, addArticlesToPage, loadMoreArticles, loadMore, eventScroll, carsLocation} from './modules/slider.js';
const articlesContainer = document.getElementById('articles-container');
const articlesPerPage = 4;
let startIndex = articlesPerPage;

const scrolledToBottom = eventScroll(window, document, startIndex, articlesPerPage);

window.onload = () => {
    addArticlesToPage();
    window.addEventListener('scroll', () => {
        if (scrolledToBottom()) {
            const newArticles = loadMore(startIndex, articlesPerPage);
            newArticles.forEach(article => {
                articlesContainer.appendChild(article);
            });
            startIndex += articlesPerPage;
        }
    });
};