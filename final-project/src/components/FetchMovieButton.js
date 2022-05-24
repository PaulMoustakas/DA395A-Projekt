import { Button } from '@chakra-ui/react';
import axios from 'axios'


export const FetchMovieButton = () => {
  
  const fetchMovie = async e => {

    const imdbKey = 'k_qwo5vxl7';

    try {
      const res = await axios.get('https://imdb-api.com/en/API/Top250Movies/'+imdbKey, {
      });

      console.log(res.data);


  } catch (err) {
      console.log(err);
  }
}

  return (
    <Button colorScheme='gray' onClick={fetchMovie}>Fetch new movie from IMDB Top250</Button>
  );


}

export default FetchMovieButton;
