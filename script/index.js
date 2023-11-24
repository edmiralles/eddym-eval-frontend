import {createArticleElement, addArticlesToPage, loadMoreArticles, loadMore, eventScroll, carsLocation, /*changeImage, setupSlider*/} from './modules/slider.js';
const articlesContainer = document.getElementById('articles-container');
const articlesPerPage = 4;
let startIndex = articlesPerPage;

const scrolledToBottom = eventScroll(window, document, startIndex, articlesPerPage);

window.onload = () => {
    addArticlesToPage();
   /* setupCarousel(articlesContainer, startIndex, carsLocation);*/
    window.addEventListener('scroll', () => {
        if (scrolledToBottom()) {
            const newArticles = loadMore(startIndex, articlesPerPage);
            newArticles.forEach(article => {
                articlesContainer.appendChild(article);
                 /*changeImageAndThumbnails(articlesContainer, carsLocation[startIndex + index], startIndex + index);*/
            });
            startIndex += articlesPerPage;
        }
    });
};
