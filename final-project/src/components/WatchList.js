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
  Table,Thead,Tbody,Tfoot,Th,Td,TableCaption, Tr, IconButton
} from '@chakra-ui/react';



export function WatchList () {
  return (
<Box overflow="auto" minHeight="50vh" maxHeight="50vh" maxWidth="80vh" >
  <Table variant='simple' size="sm">
    <TableCaption > {"hej"} Movies to watch</TableCaption>
    <Thead>
      <Tr >
        <Th>Poster</Th>
        <Th >Title</Th>
        <Th >Description</Th>
        <Th ></Th>
      </Tr>
    </Thead>
    <Tbody>

    hej

    </Tbody>
  </Table>
</Box>
)
}
