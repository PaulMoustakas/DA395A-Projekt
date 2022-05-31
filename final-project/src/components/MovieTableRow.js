import React, { Component } from "react";
import {Td, Tr, Image} from '@chakra-ui/react';


export function MovieTableRow({ items }) {

    if (items != null) {
    return items.map(item => (
        <Tr>
            <Td><Image margin={"auto"} maxWidth={'10em'} borderRadius={"5px"} src={item.poster}/></Td>
            <Td textAlign={"center"}>{item.title}</Td>
            <Td>{item.description}</Td>
            
            </Tr>
        
    ));
    }
}

