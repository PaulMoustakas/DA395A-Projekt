import { Box, Table,Thead,Tbody,Th, Tr } from '@chakra-ui/react';
import { useState, useEffect} from 'react';
import { MovieTableRow } from './MovieTableRow';


export function WatchList () {
  return (
    <Box overflow="auto"  maxHeight="50vh" maxWidth="80vh" >
      <Table variant='simple' size="lg" id = "movieTable">
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
}

export {populateList,printMovies,loadMovies};
