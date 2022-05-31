import { Button } from '@chakra-ui/react';
import { WatchList } from './WatchList';

export const SaveMovieButton = ({movie}) => {

  function addToLocalStorage () {
    console.log("localstorage")
    const localStorageMovie = {title:movie['fullTitle'], poster:movie['image'], description:movie['crew']};
    const movies = JSON.parse(localStorage.getItem("movies")  || "[]");
    movies.push(localStorageMovie);
    localStorage.setItem('movies', JSON.stringify(movies));
    window.dispatchEvent(new Event("storage"));
  };

return (
  <Button colorScheme='yellow'
  onClick={addToLocalStorage}
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
  mt={4}
  mb={-4}
  height="38px"
  >
    Add to WatchList
  </Button>
  
);
}

export default SaveMovieButton;
