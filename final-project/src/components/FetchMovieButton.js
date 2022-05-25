import { Button } from '@chakra-ui/react';
import axios from 'axios';

export const FetchMovieButton = ({movie}) => {
  const fetchMovie = async () => {
  const imdbKey = 'k_qwo5vxl7';

  try {
    const res = await axios.get('https://imdb-api.com/en/API/Top250Movies/'+imdbKey, {});
    const randomID =  Math.floor(Math.random() * 250) + 1;
    movie(res.data['items'][randomID]);

  } catch (err) {
    console.log(err);
  }
}

  return (
    <Button colorScheme='yellow' onClick={fetchMovie}>Fetch new movie from IMDB Top250</Button>
  );
}

export default FetchMovieButton;
