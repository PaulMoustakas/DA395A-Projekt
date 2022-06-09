import {React} from 'react';
import { Image, Td, Tr, IconButton, useBoolean} from '@chakra-ui/react'
import { CloseIcon, CheckIcon, AddIcon} from '@chakra-ui/icons'

export function Movie(props) {
  var [flag, setFlag] = useBoolean()

//Denna kan även ladds och syncas med Movie Local List, men nu är det en toggle endast.
  if (props != null) {
    function seen (event)  {
      props.addToSeen(props.item.id)
      setFlag.toggle();
    }

    return (
      <Tr>
        <Td><Image margin={"auto"} maxWidth={'10em'} borderRadius={"5px"} src={props.item.poster}/></Td>
        <Td textAlign={"center"}>{props.item.title}</Td>
        <Td>{props.item.description}</Td>

        <Td>
            <IconButton
            onClick={(event) => [seen()]}
            variant='outline'
            colorScheme='green'
            aria-label='Call Sage'
            fontSize='20px'
            w={6} h={6}
            border="transparant"
            icon={ flag ? <CheckIcon /> : <AddIcon />}
            />
          </Td>

          <Td>  <IconButton
            onClick={() => {props.deleteItem(props.item.id)}}
            variant='outline'
            colorScheme='red'
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
