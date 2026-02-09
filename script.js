const addPlayerBtn = document.querySelector('#addPlayer');
const playerName = document.querySelector('#playerName');

const players = [];

function createPlayer(name){
    let score = 0;
    
    const getName = ()=> {return name}
    
    const increaseScore = ()=> score++;

    const decreaseScore = ()=> {
        if(score > 0){
           score--; 
        }
    }

    const getScore = ()=>{
        return score
    }

    const reset = ()=>{
        score = 0
    }

    return{
        getName,
        increaseScore,
        decreaseScore,
        getScore,
        reset,
    }
}

function addPlayer(name){
    const newPlayer = createPlayer(name);
    players.push(newPlayer);
}

addPlayerBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const player = playerName.value;
    addPlayer(player);
    console.log(players)  
})





// We can now create our html
// this html consist a textbox and a button
// that will let you input name of a player

// this created player need to be stored in array
