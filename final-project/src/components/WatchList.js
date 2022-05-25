import { Box, Table,Thead,Tbody,Th, Tr } from '@chakra-ui/react';

 function populateList (movie) {


   let tableMovie = document.createElement("tr");
   let tdTitle = document.createElement("td");
   var titleText = document.createTextNode(movie['fullTitle']);
   tdTitle.style.margin="50px"

   tdTitle.append(titleText);

   let tdPoster = document.createElement("td");
   var poster = document.createElement("img");
   poster.setAttribute("src",movie['image']);
   poster.style.borderRadius="15px";
   poster.style.margin="15px"
   tdPoster.append(poster);

   let tdCrew = document.createElement("td");
   var crew = document.createTextNode(movie['crew']);
   tdCrew.style.width="300px";
   tdCrew.append(crew);

   tableMovie.style.fontSize="12px"
   tableMovie.append(tdPoster);
   tableMovie.append(tdTitle);
   tableMovie.append(tdCrew);

   document.getElementById("movieTable").append(tableMovie);
}

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

function printMovies (movies) {
  for (let i = 0; i < movies.length; i++) {
    let tableMovie = document.createElement("tr");

    let tdTitle = document.createElement("td");
    var titleText = document.createTextNode(movies[i]['title']);
    tdTitle.style.margin="20px"
    tdTitle.append(titleText);

    let tdPoster = document.createElement("td");
    var poster = document.createElement("img");
    poster.setAttribute("src",movies[i]['poster']);
    poster.style.borderRadius="15px";
    poster.style.margin="15px"
    tdPoster.append(poster);

    let tdCrew = document.createElement("td");

    var crew = document.createTextNode(movies[i]['description']);
    tdCrew.append(crew);

    tableMovie.style.fontSize="12px"
    tableMovie.append(tdPoster);
    tableMovie.append(tdTitle);
    tableMovie.append(tdCrew);

    document.getElementById("movieTable").append(tableMovie);
  }
}

export function WatchList () {
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

export {populateList,printMovies,loadMovies};
