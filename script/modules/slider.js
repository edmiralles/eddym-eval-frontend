const carsLocation = [
    {
        "id": 1,
        "image": "vehicule1.png",
        "model": "peugeot",
        "description": "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0.5km supplémentaire).",
        "price": 999,
        "agence": "Paris",
        "thumbnails": [
            "vehicule2.png",
            "vehicule3.png",
            "vehicule4.png"
        ]
    },
    {
        "id": 2,
        "image": "vehicule2.png",
        "model": "Ford Focus",
        "description": "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0.5km supplémentaire).",
        "price": 999,
        "agence": "Paris",
        "thumbnails": [
            "vehicule3.png",
            "vehicule4.png",
            "vehicule1.png"
        ]
    },
    {
        "id": 3,
        "image": "vehicule3.png",
        "model": "Audi A1",
        "description": "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0.55km supplémentaire).",
        "price": 1100,
        "agence": "Paris",
        "thumbnails": [
            "vehicule4.png",
            "vehicule1.png",
            "vehicule2.png"
        ]
    },
    {
        "id": 4,
        "image": "vehicule4.png",
        "model": "Opel Mokka",
        "description": "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0.4km supplémentaire).",
        "price": 1150,
        "agence": "Paris",
        "thumbnails": [
            "vehicule1.png",
            "vehicule2.png",
            "vehicule3.png"
        ]
    },
    {
        "id": 5,
        "image": "vehicule1.png",
        "model": "peugeot",
        "description": "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0.5km supplémentaire).",
        "price": 999,
        "agence": "Paris",
        "thumbnails": [
            "vehicule2.png",
            "vehicule3.png",
            "vehicule4.png"
        ]
    },
    {
        "id": 6,
        "image": "vehicule2.png",
        "model": "Ford Focus",
        "description": "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0.5km supplémentaire).",
        "price": 999,
        "agence": "Paris",
        "thumbnails": [
            "vehicule3.png",
            "vehicule4.png",
            "vehicule1.png"
        ]
    },
    {
        "id": 7,
        "image": "vehicule3.png",
        "model": "Audi A1",
        "description": "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0.55km supplémentaire).",
        "price": 1100,
        "agence": "Paris",
        "thumbnails": [
            "vehicule4.png",
            "vehicule1.png",
            "vehicule2.png"
        ]
    },
    {
        "id": 8,
        "image": "vehicule4.png",
        "model": "Opel Mokka",
        "description": "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0.4km supplémentaire).",
        "price": 1150,
        "agence": "Paris",
        "thumbnails": [
            "vehicule1.png",
            "vehicule2.png",
            "vehicule3.png"
        ]
    },
    {
        "id": 9,
        "image": "vehicule1.png",
        "model": "peugeot",
        "description": "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0.5km supplémentaire).",
        "price": 999,
        "agence": "Paris",
        "thumbnails": [
            "vehicule2.png",
            "vehicule3.png",
            "vehicule4.png"
        ]
    },
    {
        "id": 10,
        "image": "vehicule2.png",
        "model": "Ford Focus",
        "description": "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0.5km supplémentaire).",
        "price": 999,
        "agence": "Paris",
        "thumbnails": [
            "vehicule3.png",
            "vehicule4.png",
            "vehicule1.png"
        ]
    },
    {
        "id": 11,
        "image": "vehicule3.png",
        "model": "Audi A1",
        "description": "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0.55km supplémentaire).",
        "price": 1100,
        "agence": "Paris",
        "thumbnails": [
            "vehicule4.png",
            "vehicule1.png",
            "vehicule2.png"
        ]
    },
    {
        "id": 12,
        "image": "vehicule4.png",
        "model": "Opel Mokka",
        "description": "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0.4km supplémentaire).",
        "price": 1150,
        "agence": "Paris",
        "thumbnails": [
            "vehicule1.png",
            "vehicule2.png",
            "vehicule3.png"
        ]
    },

]

function createArticleElement(car) {
    const article = document.createElement('article');
    article.innerHTML = `
        <figure>
            <i class="fa-solid fa-caret-left" style="color: #000000;" class="arrow_left"></i>
            <div class="thumbnails"></div>
            <img src="../assets/${car.image}" alt="${car.model}" class="article-banner">
            <i class="fa-solid fa-caret-right" style="color: #000000;" class="arrow_right"></i>
        </figure>
        <section>
            <h2>${car.model}</h2>
            <p>${car.description}</p>
            <em>${car.price} € - Agence de ${car.agence}</em>
            <button class="green-button">Réserver et Payer</button>
        </section>
    `;
    return article;
}

function addArticlesToPage() {
    const articlesContainer = document.getElementById('articles-container');
    carsLocation.slice(0, 4).forEach(car => {
        const articleElement = createArticleElement(car);
        articlesContainer.appendChild(articleElement);
    });
}

function loadMoreArticles(startIndex, quantity) {
    const cars = carsLocation.slice(startIndex, startIndex + quantity);
    return cars.map(createArticleElement);
}

function loadMore(startIndex, articlesPerPage) {
    const newArticles = loadMoreArticles(startIndex, articlesPerPage);
    return newArticles;
}

function eventScroll(window, document, startIndex, articlesPerPage) {
    return function () {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            return true;
        }
        return false;
    }
}

function setupSlider(articlesContainer, startIndex, carsLocation) {
    articlesContainer.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('left-arrow')) {
            if (startIndex > 0) {
                startIndex -= 1;
                const car = carsLocation[startIndex];
                changeImageAndThumbnails(articlesContainer, car, startIndex);
            }
        } else if (target.classList.contains('right-arrow')) {
            if (startIndex < carsLocation.length - 1) {
                startIndex += 1;
                const car = carsLocation[startIndex];
                changeImageAndThumbnails(articlesContainer, car, startIndex);
            }
        }
    });
}

function changeImage(articlesContainer, car, index) {
    const imgElement = articlesContainer.querySelector(`img[data-index="${index}"]`);
    imgElement.src = `../assets/${car.image}`;

    const thumbnailsContainer = articlesContainer.querySelector('.thumbnails');
    thumbnailsContainer.innerHTML = '';

    car.thumbnails.forEach((thumbnail, i) => {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = `../assets/${thumbnail}`;
        thumbnailImg.alt = `${car.model} Thumbnail ${i + 1}`;
        thumbnailImg.addEventListener('click', () => {
            startIndex = index;
            changeImageAndThumbnails(articlesContainer, car, index);
        });

        thumbnailsContainer.appendChild(thumbnailImg);
    });
}

export { createArticleElement, addArticlesToPage, loadMoreArticles, loadMore, eventScroll, carsLocation, changeImage, setupSlider }

