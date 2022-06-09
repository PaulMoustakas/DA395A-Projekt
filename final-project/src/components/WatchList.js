import { Box, Table,Thead,Tbody,Th, Tr } from '@chakra-ui/react';
import { useState, useEffect} from 'react';
import { Movie } from './Movie';

export function WatchList () {

  const [movieArray, setMovieArray] = useState([{
    id: '',
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

    function deleteItem(id) {
      setMovieArray(JSON.parse(localStorage.getItem("movies")));
      setMovieArray(movieArray.filter((item) => item.id !== id));
      console.log(movieArray);
      localStorage.setItem('movies', JSON.stringify(movieArray));

    }


  return (
    <Box overflow="auto"  maxHeight="50vh" maxWidth="80vh" >
      <Table variant='simple' size="sm" id = "movieTable">
        <Thead>
          <Tr>
            <Th textAlign="center">Poster</Th>
            <Th textAlign="center" width="200px">Title</Th>
            <Th textAlign="center" width="200px">Crew</Th>
            <Th textAlign="center" width="200px">Opt</Th>
         </Tr>
      </Thead>
      <Tbody>
      {movieArray != null ? movieArray.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteItem} /> ) : null}


        </Tbody>
    </Table>
   </Box>

 )
};

/*   //<MovieTableRow items = {movieArray != null ? movieArray : null }/> */
