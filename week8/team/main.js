function pokemonFromApi() {
    getJSON("https://pokeapi.co/api/v2/type/3").then(function (data) {
        console.log(data);

        var type = data["name"];
        var pokelist = document.getElementById("pokelist");
        document.getElementById("type").innerHTML = type;
        data["pokemon"].forEach(function (value) {
            let item = document.createElement("li");
            // semantically we should probably wrap the pokemon name in an <a>, then the URL could just be placed in the href, with an event listener to preventDefault...But I wanted to show how to add custom data- attributes.
            item.innerHTML = `<li data-url='${value.pokemon.url}'> 
            ${value.pokemon.name}</li>`;
            pokelist.appendChild(item);
        });
        pokelist.addEventListener("click", revealDetails);
    });
}