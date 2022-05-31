import { Button } from '@chakra-ui/react';
import axios from 'axios';

export const FetchMovieButton = ({movie}) => {
  const fetchMovie = async () => {
  const imdbKey = 'k_qwo5vxl7';

  try {
    const res = await axios.get('https://imdb-api.com/en/API/Top250Movies/'+imdbKey, {});
    const randomID =  Math.floor(Math.random() * 250) + 1;


    var dataIn = res.data['items'][randomID];

    dataIn.image.split("_V1_"[0] );
    console.log(dataIn.image.split("_V1_")[0] + "Ratio0.6716_AL_.jpg");

    movie(dataIn);

  } catch (err) {
    console.log(err);
  }
}

  return (
    <Button colorScheme='yellow' onClick={fetchMovie}>Fetch new movie from IMDB Top250</Button>
  );
}

export default FetchMovieButton;
