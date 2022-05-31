import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Header } from './components/Header';
import { MovieDisplay } from './components/MovieDisplay';
import { Divider } from './components/Divider';
import { WatchList, printMovies,loadMovies} from './components/WatchList';
import FetchMovieButton from './components/FetchMovieButton';
import { useState, useEffect} from 'react';

function App() {

const [movie,setMovie] = useState(null);

useEffect(() => {
  const movies = loadMovies();
  printMovies(movies);
}, []);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>

          <Header />
          <FetchMovieButton movie={ response => setMovie(response)} />
          <MovieDisplay movie={movie} />
          <Divider />
          <WatchList/>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}


export default App;
