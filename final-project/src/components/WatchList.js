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

    function addToSeen (id) {
      const localStorageSeenMovie = {id:id};
      let seenMovies = JSON.parse(localStorage.getItem("seenMovies")  || "[]");

      for (let i = 0; i < seenMovies.lenght; i++) {
          if (seenMovies[i].id == id) {
            console.log("move exist");

      }
      else {
           console.log("move not founf");
      }


      }


        let movies = JSON.parse(localStorage.getItem("movies"));
        let newArray = movies.filter (function(el) {
          return el.id !== id;
        });

        localStorage.setItem('movies',JSON.stringify(newArray));
        window.dispatchEvent(new Event("storage"));

    }

      localStorage.setItem('seenMovies', JSON.stringify(seenMovies));
      window.dispatchEvent(new Event("storage"));
    }

    function deleteItem(id) {
      let movies = JSON.parse(localStorage.getItem("movies"));
      let newArray = movies.filter (function(el) {
        return el.id !== id;
      });

      localStorage.setItem('movies',JSON.stringify(newArray));
      window.dispatchEvent(new Event("storage"));
    }


  return (
    <Box overflow="auto"  maxHeight="50vh" maxWidth="80vh" >
      <Table variant='simple' size="sm" id = "movieTable">
        <Thead>
          <Tr>
            <Th textAlign="center">Poster</Th>
            <Th textAlign="center" width="200px">Title</Th>
            <Th textAlign="center" width="200px">Crew</Th>
            <Th alignItems="center" width="100px">Seen</Th>
            <Th alignItems="center" width="100px">Delete</Th>
         </Tr>
      </Thead>
      <Tbody>
      {movieArray != null ? movieArray.map(movie => <Movie key={movie.id} item={movie} addToSeen={addToSeen} deleteItem={deleteItem} /> ) : null}
      </Tbody>
    </Table>
   </Box>
 )
};
