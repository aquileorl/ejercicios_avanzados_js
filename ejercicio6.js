

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, firstIndex, secondIndex){
    
    let firstItemMoved;
    firstItemMoved = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = firstItemMoved;


    return array;
}

console.log(swap(fantasticFour,0,3));