import { Td, Box, Table,Thead,Tbody,Th, Tr } from '@chakra-ui/react';
import MovieTableRow from './MovieTableRow';



function loadMovies () {
  let jsonMovies = JSON.parse(localStorage.getItem("movies"));
  let movies = [];

  if (jsonMovies != null) {
    for (let i = 0; i < jsonMovies.length; i++) {
      movies.push(jsonMovies[i]);
    }
  }

  return movies;
}


export function WatchList (movies) {


  for (let i = 0; i < movies.length; i++) {

    var obj = movies[i];
    var result = Object.entries(obj);
  /*  var result = Object.keys(obj).map((key) => [Number(key), obj[key]]); */

    console.log(result);

  }



  return (
    <Box overflow="auto" minHeight="50vh" maxHeight="50vh" maxWidth="80vh" >
      <Table variant='simple' size="sm" id = "movieTable">
        <Thead>
          <Tr>
            <Th textAlign="center">Poster</Th>
            <Th textAlign="center" width="200px">Title</Th>
            <Th textAlign="center" width="200px">Crew</Th>
         </Tr>
      </Thead>
      <Tbody>


      </Tbody>
    </Table>
   </Box>
 )
}




export {loadMovies};
