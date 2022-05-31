import { Td, Box, Table,Thead,Tbody,Th, Tr } from '@chakra-ui/react';
import { useState, useEffect,refetch} from 'react';
import { MovieTableRow } from './MovieTableRow'; 

export function WatchList () {


  const [movieArray, setMovieArray] = useState([{
    title: "",
    poster: "",
    crew: "",
  }]);

    useEffect(() => {
        setMovieArray(JSON.parse(localStorage.getItem("movies")));
        window.addEventListener('storage', storageEventHandler, false);
    }, []);

    function storageEventHandler() {
      setMovieArray(JSON.parse(localStorage.getItem("movies")));
    }


  return (
    <Box overflow="auto"  maxHeight="50vh" maxWidth="80vh" >
      <Table variant='simple' size="sm" id = "movieTable">
        <Thead>
          <Tr>
            <Th textAlign="center">Poster</Th>
            <Th textAlign="center" width="200px">Title</Th>
            <Th textAlign="center" width="200px">Crew</Th>
         </Tr>
      </Thead>
      <Tbody>

      <MovieTableRow items = {movieArray != null ? movieArray : null }/>
   
         </Tbody>
    </Table>
   </Box>

 )
};


