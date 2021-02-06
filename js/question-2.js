const URL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const resultsContainer = document.querySelector("#results");
const loader = document.querySelector(".lds-ring");

fetch(URL)
    .then(res => res.json())
    .then(data => {
        loader.remove();
        let results = data.results;
        for (let i = 0; i < results.length; i++) {
            if (i === 8) break;
            resultsContainer.innerHTML += createGameCard(results[i].name, results[i].rating, results[i].tags)
        }
    })
    .catch(err => {
        loader.remove();
        console.error(err);
        resultsContainer.innerHTML = createError("Oh no! There was an error loading the results.", err);
    })