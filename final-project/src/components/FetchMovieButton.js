import { Button } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';


export const FetchMovieButton = () => {

  const [movie,setMovie] = useState({});
  
  const fetchMovie = async () => {

    const imdbKey = 'k_qwo5vxl7';
    

    try {
      const res = await axios.get('https://imdb-api.com/en/API/Top250Movies/'+imdbKey, {
      });

    const randomID =  Math.floor(Math.random() * 250) + 1;
    setMovie(res.data['items'][randomID]);
    
    console.log(movie);
    

  } catch (err) {
      console.log(err);
  }
}

  return (
    <Button colorScheme='gray' onClick={fetchMovie}>Fetch new movie from IMDB Top250</Button>
  );


}

export default FetchMovieButton;
