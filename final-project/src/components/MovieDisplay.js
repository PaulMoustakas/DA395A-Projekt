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
      src='https://imgs.search.brave.com/9JMcbmSBxJW-NHHIminopOU39396FwmfuSmjXuM6xeQ/rs:fit:1200:628:1/g:ce/aHR0cHM6Ly9wb3N0/Lm1lZGljYWxuZXdz/dG9kYXkuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9zaXRlcy8z/LzIwMjAvMDIvMzIz/MDU3XzIyMDAtMTIw/MHg2MjguanBn'
      alt='Test'
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