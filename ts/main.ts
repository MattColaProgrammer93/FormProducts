class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

window.onload = function(){
    let addBtn = 
        <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame(){
    console.log("Add video game is called");

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

function getVideoGame():VideoGame{
    // Create and returns video game
    let game = new VideoGame();

    // Get data from form
    let titleInput = <HTMLInputElement>getById("title");
    game.title = titleInput.value;

    let priceInput = <HTMLInputElement>getById("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement>getById("rating");
    game.rating = ratingInput.value

    let digitalOnly = <HTMLInputElement>getById("online");
    game.isDigitalOnly = digitalOnly.checked;

    /*
    if(digitalOnly.checked){
        game.isDigitalOnly = true;
    } else {
        game.isDigitalOnly = false;
    }
    */

    return game;
}

function displayGame(myGame:VideoGame):void{
    // Displays video game
    let displayDiv = getById("display");

    // Create <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    // Create paragraph with game details
    let gameInfo = document.createElement("p");
    let notDigitalDisplay = "";
    if (myGame.isDigitalOnly){
        notDigitalDisplay = "not";
    }
    gameInfo.innerText = myGame.title + " has a rating of " +
                    myGame.rating + ". It costs " + myGame.price.toFixed(2)
                    + ". It is " + notDigitalDisplay + " digital only";

    // Add <h2> in the <div id="display">
    displayDiv.appendChild(gameHeading);
    // Add <p> game info
    displayDiv.appendChild(gameInfo);
}

// Validates the data
function isAllDataValid(){
    return true;

}

// Test Code
/*
let myGame = new VideoGame();
myGame.title = "Mario";
myGame.rating = "E";
myGame.isDigitalOnly = true;
*/

// Shortcut for getElementById
function getById(id:string){
    return document.getElementById(id);
}