import { Button } from '@chakra-ui/react';
import axios from 'axios';

export const FetchMovieButton = ({movie}) => {
  const fetchMovie = async () => {
  const imdbKey = 'k_qwo5vxl7'; //  k_qwo5vxl7 k_khdf7dt8

  try {
    console.log("kallar");
    const res = await axios.get('https://imdb-api.com/en/API/Top250Movies/'+imdbKey, {});
    const randomID =  Math.floor(Math.random() * 250) + 1;
    var dataIn = res.data['items'][randomID];

    dataIn.image.split("_V1_"[0]);
    dataIn.image = dataIn.image.split("_V1_")[0] + "Ratio0.6716_AL_.jpg"
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
