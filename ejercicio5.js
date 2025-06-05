
function rollDice(number){
    let tirada = Math.floor( Math.random()* number) + 1; //+1 para que no de 0 el dado

    return tirada;
}

console.log(rollDice(100));