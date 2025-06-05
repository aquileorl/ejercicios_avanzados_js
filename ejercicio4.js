


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

console.log(findArrayIndex(mainCharacters,"Obi-Wan"));