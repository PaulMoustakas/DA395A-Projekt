import { Button } from '@chakra-ui/react';
import LoadFromLocal from './LoadFromLocalStorage';


export const SaveMovieButton = ({movie}) => {
  console.log(movie);

  function addToLocalStorage () {
    let jsonMovies = JSON.parse(localStorage.getItem("movies"));
    let movies = [];

    for (let i = 0; i < jsonMovies.length; i++) {
        movies.push(jsonMovies[i]);
    }

    movies.push(movie);


    let moviesLocal = JSON.stringify(movies);
    localStorage.setItem("movies", movies);
  };





return (
  <Button
    onClick={addToLocalStorage}
    bg="gray.800"
    border="1px solid transparent"
    _hover={{
      border: "1px",
      borderStyle: "solid",
      borderColor: "blue.400",
      backgroundColor: "gray.700",
    }}
    borderRadius="xl"
    m="1px"
    px={3}
    height="38px"
  >
    Add to WatchList
  </Button>
);
}



export default SaveMovieButton;
