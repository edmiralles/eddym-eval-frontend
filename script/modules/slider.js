const carsLocation = [
    {
        "id": 1,
        "image": "vehicule1.png",
        "model":"peugeot",
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
        "model":"Ford Focus",
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
        "model":"Audi A1",
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
        "model":"Opel Mokka",
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
        "model":"peugeot",
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
        "model":"Ford Focus",
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
        "model":"Audi A1",
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
        "model":"Opel Mokka",
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
        "model":"peugeot",
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
        "model":"Ford Focus",
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
        "model":"Audi A1",
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
        "model":"Opel Mokka",
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
            <img src="../assets/${car.image}" alt="${car.model}">
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
export{createArticleElement, addArticlesToPage, loadMoreArticles, loadMore, eventScroll, carsLocation}