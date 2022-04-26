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
}

function displayGame(myGame:VideoGame):void{
    // Displays video game
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