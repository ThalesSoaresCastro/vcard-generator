import React from 'react';
import Image from 'next/image'

import{
  Flex,
} from '@chakra-ui/react'
import { AspectRatio } from "@chakra-ui/react"

import Header from '../Header'
import imageTop from '../../public/riscosdireita.svg';
import imageBottom from '../../public/riscosesquerda.svg';

interface Props {
    color:string;
    children: React.ReactNode;
}

const BackgroundApp: React.FC<Props> = ({color,children}) => {
  return(
    <Flex height="100vh" backgroundColor={color} flexDirection="column" justifyContent="space-between" >
      <Header />
        <Flex 
          flexDirection="row-reverse"
          h={"40%"}
          flex="1 1 auto"
        >
          <Image src={imageTop} alt="image top" objectFit="contain"  objectPosition="right top" />
        </Flex>

          {children}
        
        <Flex
          flexDirection="row" 
          h={"40%"}
          flex="1 1 auto"
        >
            <Image src={imageBottom} alt="image bottom" objectFit="contain" objectPosition="left bottom" />
        </Flex>
    </Flex>

  );
}

export default BackgroundApp;