import { Box,Table,Thead,Tbody,Th,TableCaption, Tr } from '@chakra-ui/react';



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
