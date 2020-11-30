function getElById(id) {
    return document.getElementById(id);
    
}
 const battleLog = getElById('battle-log');

export function showLogs (player1, player2, count){
    const p = document.createElement('p');
    p.innerText = generateLog(player1, player2, count);
    battleLog.insertBefore(p, battleLog.children[0]); 
}

 function generateLog(player1, player2, count) {
    const { name, hp:{defaultHP, damageHP}} = player1;

    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${player2.name}, не помня себя от испуга, ударил в предплечье врага. -${count} [${damageHP} / ${defaultHP}]`,
        `${name} поперхнулся, и за это ${player2.name} с испугу приложил прямой удар коленом в лоб врага. -${count} [${damageHP} / ${defaultHP}]`,
        `${name} забылся, но в это время наглый ${player2.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count} [${damageHP} / ${defaultHP}]`,
        `${name} пришел в себя, но неожиданно ${player2.name} случайно нанес мощнейший удар. -${count} [${damageHP} / ${defaultHP}]`,
        `${name} поперхнулся, но в это время ${player2.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${count} [${damageHP} / ${defaultHP}]`,
        `${name} удивился, а ${player2.name} пошатнувшись влепил подлый удар. -${count} [${damageHP} / ${defaultHP}]`,
        `${name} высморкался, но неожиданно ${player2.name} провел дробящий удар. -${count} [${damageHP} / ${defaultHP}]`,
        `${name} пошатнулся, и внезапно наглый ${player2.name} беспричинно ударил в ногу противника -${count} [${damageHP} / ${defaultHP}]`,
        `${name} расстроился, как вдруг, неожиданно ${player2.name} случайно влепил стопой в живот соперника. -${count} [${damageHP} / ${defaultHP}]`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${player2.name} со скуки, разбил бровь сопернику. -${count} [${damageHP} / ${defaultHP}]`
    ]; 
    return logs[random(logs.length) -1]; 
}

export function random(max ,min = 0) {
    const num = max - min;
    return Math.ceil(Math.random() * num)+min;
    
}