


const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
    //Tu codigo
    let position;
    let encontrado = false;
    for(const item of array){
        if(item == text){
            position = array.indexOf(item);
            encontrado = true;
        }
    }

    if(encontrado){
        return position;
    } else {
        return "No ha sido posible encontrarlo";
    }
}



function removeArrayIndex(array, text){
    let position = findArrayIndex(array,text);
    array.splice(position,1);

    return array;
}

console.log(findArrayIndex(mainCharacters,"Obi-Wan"));
console.log(removeArrayIndex(mainCharacters,"Anakin"));