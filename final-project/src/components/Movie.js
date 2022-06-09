import React from 'react';
import { Button, Box, Image, Td, Tr, IconButton} from '@chakra-ui/react'
import Delete from "../images/delete.png";
import { CloseIcon, CheckIcon} from '@chakra-ui/icons'

export function Movie(props) {

  console.log(props);
  if (props != null) {

    return (

      <Tr>
          <Td><Image margin={"auto"} maxWidth={'10em'} borderRadius={"5px"} src={props.item.poster}/></Td>
          <Td textAlign={"center"}>{props.item.title}</Td>
          <Td>{props.item.description}</Td>

          <Td>
            <IconButton
            onClick={() => {props.addToSeen(props.item.id)}}
            variant='outline'
            colorScheme='teal'
            aria-label='Call Sage'
            fontSize='20px'
            w={6} h={6}
            border="transparant"
            icon={<CheckIcon />}
            />
          </Td>

          <Td>  <IconButton
            onClick={() => {props.deleteItem(props.item.id)}}
            variant='outline'
            colorScheme='teal'
            aria-label='Call Sage'
            fontSize='20px'
            w={6} h={6}
            border="transparant"
            icon={<CloseIcon />}
            />
          </Td>
        </Tr>
    )
  }
}
