import React from 'react';

// import { Container } from './styles';


import{
    Flex,
    Text,
  } from '@chakra-ui/react'

interface Props{
    color:string;
}

const TextHover: React.FC<Props> = ({ color }) => {
   return(
    <Flex 
      flexDirection="column" 
      alignItems="center" 
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

      fontWeight="bold"
      _hover={{ 
          backgroud: "gray.900", 
          //color: "teal.200"
          color:color
        }}
    >
      generator
    </Text>
    </Flex>
  );
}

export default TextHover;