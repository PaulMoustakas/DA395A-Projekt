import { Box, Text, Image } from '@chakra-ui/react';
import SaveMovieButton from './SaveMovieButton';

export const MovieDisplay = ({movie}) => {


  function checkIfMovieSeen (movie) {
   const seenMovies = JSON.parse(localStorage.getItem("seenMovies")  || "[]");
   let movieIsSeen = false;

   if (movie != null) {

   for (let i = 0; i < seenMovies.length; i++ ) {
    if (seenMovies[i].id == movie.id) {
    movieIsSeen = true;
    }
   }
}

   return movieIsSeen;
  }


  return (
    <Box p={4} display={{ md: 'flex' }}>
      <Box flexShrink={0}
      display="flex"
      justifyContent="center">
        <Image
        borderRadius='lg'
        width={{ md: 60 }}
        src={movie != null ? movie.image : "https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo._CB410901634_.png" }
        alt='Woman paying for a purchase'
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}  justifyContent="center">
        <Text
        fontWeight='bold'
        textTransform='uppercase'
        fontSize='sm'
        letterSpacing='wide'
        color='#ECC648'
        >
        {movie != null ? movie.fullTitle : null }
        </Text>
        {movie != null ? "IMDb Rating " + movie.imDbRating : null}
        <Text mt={2} color='gray.500'>
        {movie != null ? "Rank: "+movie.rank  :  null}
        </Text>
        <Text mt={2} color='gray.500'>
        {movie != null ? "Crew:" + movie.crew : null}
        </Text>
        {checkIfMovieSeen(movie) != true ? <SaveMovieButton movie={movie}/> : "You have already seen this movie!" }
      </Box>
    </Box>
  );
}


export default MovieDisplay;
