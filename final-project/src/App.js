import React from 'react';
import useState from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Header } from './components/Header';
import { MovieDisplay } from './components/MovieDisplay';
import { Divider } from './components/Divider';
import { WatchList } from './components/WatchList';
import FetchMovieButton from './components/FetchMovieButton';



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>

          <Header />
          <MovieDisplay />
          <FetchMovieButton/>
          <MovieDisplay/>
          <Divider />
          <WatchList/>

          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
