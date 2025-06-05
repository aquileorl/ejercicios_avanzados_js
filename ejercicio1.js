
const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

//Generar nuevo array con los géneros de película e imprímelo por pantalla
const genres = [];

for (const movie of movies){ //recorro array movies
  
  for(const category of movie.categories){ //recorro array categories dentro de movie
    if(!genres.includes(category)){ //filtro si ya están en array 'genre' o no
      genres.push(category);
    }
  }
}
console.log(genres);