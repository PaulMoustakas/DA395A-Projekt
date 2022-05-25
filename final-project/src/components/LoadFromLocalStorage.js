function loadFromLocal () {
  let jsonMovies = JSON.parse(localStorage.getItem("movies"));
  let movies = [];

if (jsonMovies != null) {
  for (let i = 0; i < jsonMovies.length; i++) {
       movies.push(jsonMovies[i]);
   }
 }

   return movies;
}

export default loadFromLocal();
