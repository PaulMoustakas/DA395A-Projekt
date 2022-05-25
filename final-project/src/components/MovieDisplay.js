import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Image,
  theme,
  Button,
} from '@chakra-ui/react';

import  View from "react";


import SaveMovieButton from './SaveMovieButton';

export const MovieDisplay = ({movie}) => {
  return (
    <Box p={4} display={{ md: 'flex' }}>
      <Box flexShrink={0}
      display="flex"
      justifyContent="center">
        <Image
          borderRadius='lg'
          width={{ md: 40 }}
          src={movie != null ? movie.image : "https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo._CB410901634_.png" }
          alt='Woman paying for a purchase'
        />
      </Box>

      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} maxWidth="10em" justifyContent="center">
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

    {movie != null ? <SaveMovieButton movie={movie}/> :null }
  </Box>
</Box>
);
}

export default MovieDisplay;
