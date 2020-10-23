// You must provide the following:

// Pull data from an API that we have provided
// Utilize GET only
// Be as creative as you like
// Feel free to use Bootstrap, Material, Flexbox, CSS Grid, etc.
// Content should be visually appealing
// Nothing vulgar in nature please


function fetchPokemon (url){
    //Creating our fetch function that takes in a url
    fetch (url)
    //fetching from the url(fetch by default is GET request)
    .then (response => response.json())
    //taking the info we got from our fetch and turning it into readable JSON
    .then (data => {
        console.log(data)
        //taking that JSON data and calling it data, then console logging it so we can step through it
        displayResults(data)
        //passing the JSON data into the displayResult function
    })
}

// Create a display function that takes in the data from 
// our fetch function => displayResults(data){
    // step thru pokemon data and assign to variables to be used
    // create elements for card
    // append data to elements
// }


function displayResults(json) {

    let body = document.getElementsByTagName('body');
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    
    let name = json.name;
    h2.innerHTML=name;
    document.body.appendChild(div);

    let weight = "Weight: " + json.weight;
    li1.innerHTML=weight;
    div.appendChild(h2);

    div.appendChild(ul);

    let height = "Height: " + json.height;
    li2.innerHTML=height;
    ul.appendChild(li1);

    let threeMoves = "Evolution Level: " + json.order;
    li3.innerHTML=threeMoves;
    ul.appendChild(li2);
    ul.appendChild(li3);

}

for (let i = 1; i < 4; i++) {
    let baseURL = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetchPokemon(baseURL)
}