import React from 'react';
import Image from 'next/image'
// import { Container } from './styles';


import{
    Flex,
    Text,
    Box,
  } from '@chakra-ui/react'

interface Props{
    color:string;
    bg:string;
    button?:boolean;
    urlreturn?:string;
}

import Router from 'next/router';

import buttonVoltar from '../../public/voltar_btm.png';


const TextHover: React.FC<Props> = ({color, bg, button, urlreturn}) => {
   
  return(
    <Flex 
      flexDirection="column" 
      alignItems="left" 
      width={"10%"} 
      m={2} 
      mr={8} 
    >
    <Text
      fontSize={'48px'}
      //color="teal.200"
      color={color}
      fontWeight="bold"
    >
      vCard
    </Text>
    <Text
      fontSize={'28px'}
      textShadow="1px 1px #0FD9E7"
      color={bg}
      fontWeight="bold"
      _hover={{  
          //color: "teal.200"
          color:color
        }}
    >
      generator
    </Text>

      {
        button?
        <Box
        mt={"40%"}
        w={"18%"}
        alignItems="center"
        justifyContent="center"
        opacity={0.6}
        _hover={{
            opacity: 1,
        }}
        onClick={()=>{
            let url = urlreturn?urlreturn:'/';
            Router.push(url);
        }}
      >
        <Image 
            src={buttonVoltar}
            alt="botao voltar"
            objectFit="contain"
            objectPosition="center center"
        />
      </Box>:null
      }

    </Flex>
  );
}

export default TextHover;