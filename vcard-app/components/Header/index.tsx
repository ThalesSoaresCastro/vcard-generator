import React from 'react';

import Image from 'next/image';
import Router from 'next/router';
import{
    Flex,
} from '@chakra-ui/react'
  
import logoHeader from '../../public/logocommcepta.png';

const Header: React.FC = () => {
  return(
    <Flex
        backgroundColor="blue.600"
        p={2}
    >
        <Image 
            src={logoHeader} 
            alt="logo"
            height={'30px'}
            width={'200px'}
            onClick={()=>{
                Router.push('/')
            }}
        />
    </Flex>
  );
}

export default Header;