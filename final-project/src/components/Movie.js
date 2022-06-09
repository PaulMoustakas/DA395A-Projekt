import React from 'react';
import { Button, Box, Image, Td, Tr} from '@chakra-ui/react'
import Delete from "../images/delete.png";

export function Movie(props) {

  console.log(props);
  if (props != null) {

    return (

      <Tr>
          <Td><Image margin={"auto"} maxWidth={'10em'} borderRadius={"5px"} src={props.item.poster}/></Td>
          <Td textAlign={"center"}>{props.item.title}</Td>
          <Td>{props.item.description}</Td>
          <Td> <Button  onClick={() => {props.deleteItem(props.item.id)}}>

          <Image
          src={Delete} alt=""
          objectFit="fit"
          />


          </Button> </Td>

          </Tr>


    )
  }
}
