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
}

import Router from 'next/router';

import buttonVoltar from '../../public/voltar_btm.png';


const TextHover: React.FC<Props> = ({color, bg}) => {
   
  return(
    <Flex 
      flexDirection="column" 
      alignItems="left" 
      width={"10%"} 
      m={2} 
      mr={8} 
    >
    <Text
      fontSize={'58px'}
      //color="teal.200"
      color={color}
      fontWeight="bold"
    >
      vCard
    </Text>
    <Text
      fontSize={'34px'}
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
            Router.push('/');
        }}
      >
        <Image 
            src={buttonVoltar}
            alt="botao voltar"
            objectFit="contain"
            objectPosition="center center"
        />
      </Box>

    </Flex>
  );
}

export default TextHover;