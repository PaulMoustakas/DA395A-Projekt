import { Button } from '@chakra-ui/react';

export const SaveMovieButton = ({movie}) => {


  function addToLocalStorage () {
    let jsonMovies = JSON.stringify(movie);
    addToLocalStorage.setItem("movie", jsonMovies);
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
