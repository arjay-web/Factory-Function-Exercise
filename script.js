const addPlayerBtn = document.querySelector('#addPlayer');
const playerName = document.querySelector('#playerName');
const playerContainer = document.querySelector('#playerContainer');



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

    renderPlayer()
}

function renderPlayer(){
    playerContainer.innerHTML = "";

    players.forEach(player =>{
        const playerCard = document.createElement('div');
        playerCard.classList.add()

        playerCard.innerHTML = `
        <div>
            <h3>${player.getName()}</h3>
            <p>${player.getScore()}</p>
            <button class="increaseBtn">Increase</button>
            <button class="decreaseBtn">Decrease</button>
            <button class="resetBtn">Reset</button>
            
        </div>
        `;

        const increaseBtn = playerCard.querySelector('.increaseBtn');
        const decreaseBtn = playerCard.querySelector('.decreaseBtn');
        const resetBtn = playerCard.querySelector('.resetBtn')

        increaseBtn.addEventListener('click',()=>{
            player.increaseScore();
            renderPlayer();
        })

        decreaseBtn.addEventListener('click', ()=> {
            player.decreaseScore();
            renderPlayer();
        })

        resetBtn.addEventListener('click', ()=>{
            player.reset();
            renderPlayer()
        })

        playerContainer.appendChild(playerCard);
        
    })

    
}

addPlayerBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const player = playerName.value;
    addPlayer(player);  
})






// We can now create our html
// this html consist a textbox and a button
// that will let you input name of a player

// this created player need to be stored in array
