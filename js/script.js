const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImg = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = "Loading...";
    pokemonNumber.innerHTML = "";
    if (input.value == "victor" || input.value == 906) {
        pokemonName.innerHTML = "Geraldo";
        pokemonNumber.innerHTML = 906;
        pokemonImg.src = "./images/geraldo-sem-fundo.png";
        input.value = "";
        searchPokemon = 906
    } else if ( input.value == 'janielton' || input.value == 907) {
        pokemonName.innerHTML = "Cofrinho";
        pokemonNumber.innerHTML = 907;
        pokemonImg.src = "./images/cofrinho.png";
        input.value = "";
        searchPokemon = 907;
    } else if ( input.value == 'douglas' || input.value == 908) {
        pokemonName.innerHTML = "Riquinho";
        pokemonNumber.innerHTML = 908;
        pokemonImg.src = "./images/riquinho-rico.png";
        input.value = "";
        searchPokemon = 908;
    } else if ( input.value == 'rafitoz' || input.value == 909) {
        pokemonName.innerHTML = "Deussss";
        pokemonNumber.innerHTML = 909;
        pokemonImg.src = "./images/rafitoz.png";
        input.value = "";
        searchPokemon = 909;
    } else if ( input.value == 'biel' || input.value == 910) {
        pokemonName.innerHTML = "terror do tinder";
        pokemonNumber.innerHTML = 910;
        pokemonImg.src = "./images/viel2.png";
        input.value = "";
        searchPokemon = 910;
    } else if ( input.value == 'danny' || input.value == 911) {
        pokemonName.innerHTML = "pipoqueira";
        pokemonNumber.innerHTML = 911;
        pokemonImg.src = "./images/danny.png";
        input.value = "";
        searchPokemon = 911;
    } else if ( input.value == 'xavier' || input.value == 912) {
        pokemonName.innerHTML = "alcoólatra";
        pokemonNumber.innerHTML = 912;
        pokemonImg.src = "./images/xavier.png";
        input.value = "";
        searchPokemon = 912;
    } else if(input.value != 'janielton' && input.value != 'victor' && input.value != 'douglas' &&
    input.value != 'rafitoz' && input.value != 'biel' && input.value != 'danny' && input.value != 'xavier') {
        const data = await fetchPokemon(pokemon);
        if(data) {
            pokemonImg.style.display = 'block';
            pokemonName.innerHTML = data.name;
            pokemonNumber.innerHTML = data.id;
            pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
            input.value = "";
            searchPokemon = data.id
        } else {
            pokemonImg.style.display = 'none';
            pokemonName.innerHTML = "Not found 🥴";
            pokemonNumber.innerHTML = " ";
            input.value = "";
        }
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase())
})

buttonPrev.addEventListener('click', () => {
    if(searchPokemon > 1){
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
})

buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);

})

renderPokemon(searchPokemon);