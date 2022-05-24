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

export const MovieDisplay = ({movie}) => {

return (
<Box p={4} display={{ md: 'flex' }}>
  <Box flexShrink={0}>
    <Image
      borderRadius='lg'
      width={{ md: 40 }}
      src={movie != null ? movie.image : "https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo._CB410901634_.png" }
      alt='https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo._CB410901634_.png'
    />
  </Box>
  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
    <Text
      fontWeight='bold'
      textTransform='uppercase'
      fontSize='sm'
      letterSpacing='wide'
      color='teal.600'
    >
      {movie != null ? movie.fullTitle : null}
    </Text>
    <Text
      mt={1}
      display='block'
      fontSize='lg'
      lineHeight='normal'
      fontWeight='semibold'
      href='#'
    >
    IMDB rating: {movie != null ? movie.imDbRating : null}
    </Text>
    <Text
      mt={1}
      display='block'
      fontSize='lg'
      lineHeight='normal'
      fontWeight='semibold'
      href='#'
    >
    Rank: {movie != null ? movie.rank  : null}
    </Text>
    <Text mt={2} color='gray.500'>
      Crew: {movie != null ? movie.crew : null}
    </Text>
  </Box>
</Box>
);
}

export default MovieDisplay;
