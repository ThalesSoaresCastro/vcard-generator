import type { NextPage } from 'next'
import Image from 'next/image'
import{
  Flex,
  Button,
} from '@chakra-ui/react'

import TextHover from '../components/TextHover';
import iconcarinha from '../public/iconcarinha.svg';
import iconvcard from '../public/iconvcard.svg';
import BackgroundApp from '../components/BackgroundApp';
import Router from 'next/router';

const Home: NextPage = () => {
  return (
    <BackgroundApp color={"gray.900"}>
            {/*Meio*/}
      <Flex 
        justifyContent="center"
        flexDirection={["column","row"]}
        alignItems="center" 
        position="absolute"
        top="50%"
        width="100%"
      >
        <TextHover color={"teal.200"} bg={"gray.900"} />
        <Button 
          backgroundColor="teal.200"
          color="white"
          m={'2%'} 
          size={'lg'} 
          _hover={{
            backgroundColor:"blue.300",
            border:"2px",
            borderColor:"teal.200",
          }}
          onClick={()=>{
            Router.push('/candidatos');
          }}
        >
          <Image className="icon" src={iconcarinha} alt='icon carinha'/>
          <style jsx global>{`
            .icon {
              transform:scale(0.8);
            }
          `}</style>
          Selecionar candidato
        </Button>
        <Button 
          backgroundColor="teal.200" 
          color="white" 
          m={'2%'} 
          size={'lg'}
          _hover={{
            backgroundColor:"blue.300",
            borderColor:"teal.200",
          }}
          onClick={()=>{
            Router.push('/cadastro');
          }}
        >
          <Image className="icon" src={iconvcard} alt='icon vcard'/>
          <style jsx global>{`
            .icon {
              transform:scale(0.8);
            }
          `}</style>
          criar vCard do zero
        </Button>
      </Flex>
      {/*Meio*/}

    </BackgroundApp>
  )
}

export default Home
