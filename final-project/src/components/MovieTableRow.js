import React from "react";
import {Td, Tr } from '@chakra-ui/react';


export default function MovieTableRow (props) {

    console.log(props);

    if (props != null) {
    return (
      <Tr>
          <Td  >
            hej  {props.item.title}
          </Td>

          <Td>
              {props.item.poster}
          </Td>

          <Td>
             {props.item.crew}
          </Td>
      </Tr>
    )
    }
}
