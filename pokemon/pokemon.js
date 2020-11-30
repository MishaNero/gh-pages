import { start } from "./main.js";

class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`)
        this.elProgressbar = document.getElementById(`progressbar-${name}`)
    }
}
class Pokemon extends Selectors {
        constructor({name, hp, type, selectors, attacks=[]}) {
            super(selectors);
        this.name = name;
        this.hp = {
            defaultHP: hp,
            damageHP: hp,
        }
            this.type = type;
            this.attacks = attacks;

            this.renderHP();
    }
    
    changeHP = (count, cb) => {
              this.hp.damageHP -= count;
        
        if (this.hp.damageHP <= 0) {
            this.hp.damageHP = 0;
            this.renderHP()
            endGame()
            alert ('Бедный ' + this.name + ' проиграл бой!')
            
        }
        this.renderHP();
        cb && cb(count);

    }

    renderHP = () => {
        this.renderHPLife();
        this.renderProgressbarHP();
    }
    
    renderHPLife = () => {
    const { elHP , hp: {damageHP, defaultHP}} = this;
    elHP.innerText = damageHP + ' / ' + defaultHP;
        
    }
    
    renderProgressbarHP = () => {
        const {hp: {damageHP, defaultHP}, elProgressbar} = this;
        const procent = damageHP / (defaultHP/100)
        elProgressbar.style.width = procent + '%';
        if (procent <= 60){
            elProgressbar.className = 'health low'
        };
         if (procent <= 20){
            elProgressbar.className = 'health critical'
        };
        
        
    }

};

function endGame() {
    const allButtons = document.querySelectorAll('.control .button');
    allButtons.forEach(item => item.remove());
    start();

}


export default Pokemon;
