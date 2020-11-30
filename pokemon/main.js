import Pokemon from "./pokemon.js";
import {pokemons} from "./pokemons.js";
import {showLogs, random} from "./logs.js";
import {checkClick} from "./utils.js";



let randCharacter = pokemons[random(pokemons.length-1)];
let randEnemy = pokemons[random(pokemons.length-1)];

if (randCharacter === randEnemy){
     randEnemy = pokemons[random(pokemons.length-1)];
}

const character = pokemons.find(item => item.name === `${randCharacter.name}`);
let enemy = pokemons.find(item => item.name === `${randEnemy.name}`);

let player1 = new Pokemon ({
    selectors: 'player1',
    ...character,
     });
     const elImg1 = document.getElementById('img-player1');
     elImg1.src = character.img; 
     const elName1 = document.getElementById('name-player1');
     elName1.innerText = character.name;

     
let player2 = new Pokemon ({
    selectors: 'player2',
    ...enemy,
});
    const elImg2 = document.getElementById('img-player2');
    elImg2.src = enemy.img; 
    const elName2 = document.getElementById('name-player2');
    elName2.innerText = enemy.name;

     
const control = document.querySelector('.control');
const startGame = document.createElement('button');

createStart();
start();

export function renderButtons() {

    player1.attacks.forEach(item=> {
        let btn = document.createElement('button');
        btn.classList.add('button');
        btn.innerText = item.name;
        const btnCount = checkClick(item.maxCount, btn);
    
        btn.addEventListener('click', () => {
            btnCount();
        player2.changeHP(random(item.maxDamage, item.minDamage), function(count) {
          showLogs(player2, player1, count);
           });

        player1.changeHP(random(enemy.attacks[0].maxDamage, enemy.attacks[0].minDamage), function(count) {
            showLogs(player1, player2, count);
             });
        });
        control.appendChild(btn);
        
     
    
    });
    
    player2.attacks.forEach(item=> {
        let btn = document.createElement('button');
        btn.classList.add('button');
        btn.innerText = item.name;
        const btnCount = checkClick(item.maxCount, btn);
    
        btn.addEventListener('click', () => {
            btnCount();
        player1.changeHP(random(item.maxDamage, item.minDamage), function(count) {
                showLogs(player1, player2, count);
                 });
            
        });
        control.appendChild(btn);
     
    
    })
}

function createStart() { 
    control.style.display = "flex"; 
    startGame.classList.add('button'); 
    startGame.innerText = 'Start Game'; 
    startGame.addEventListener('click', () => { 
        startGame.remove() 
        control.style.display = "grid"; 
        renderButtons(); 
    }) 
} 
 
export function start() { 
    control.style.display = "flex"; 
    control.appendChild(startGame); 
}







