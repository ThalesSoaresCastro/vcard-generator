
import React,{
    useState,
    useEffect,
    useContext,
} from 'react';
import type { NextPage } from 'next'
import Image from 'next/image'
import{
  Flex,
  Button,
  Text,
  Box,
  Select,
} from '@chakra-ui/react'

import TextHover from '../components/TextHover';
import BackgroundApp from '../components/BackgroundApp';
import Router from 'next/router';

import {
    allusers,
}from '../services/vcardservice';

import UserContext from '../contexts/user';

interface IUser{
    id?:number,
    first_name:string,
    last_name:string,
    cellphone:string,
    email:string,
    company:string,
    title:string,
    city:string,
    street:string,
    state:string,
    color:string
}


const Candidatos: React.FC = () => {

  const[lCandidatos, SetLCandidatos] = useState([] as IUser[]);  
  const[candidatoSelect, SetCandidatoSelect] = useState(0);

  const { user, userIn } = useContext(UserContext);

  useEffect(()=>{
      async function allUsersRequest() {
        const response = await allusers();
        if(response.status === 200){
            SetLCandidatos(response.data);
        }
      }
      allUsersRequest();
  },[lCandidatos.length])

  async function UserSelect(id:number){
      const userSelect:IUser = lCandidatos.filter( user => { return(user.id == id) } )[0];
      await userIn(userSelect);
  }
  
  return(
    <BackgroundApp color={"gray.100"}>
        {/*Meio*/}
        <Flex 
        justifyContent="center"
        flexDirection={["column","row"]}
        alignItems="center" 
        position="absolute"
        top="40%"
        width="100%"
        >

            <TextHover color={"blue.400"} bg={"gray.100"} button={true} urlreturn={'/'} />

            <Flex
                w={"20%"}
                flexDirection="column"
            >
                    <Text
                        color="blue.400"
                    >
                        Selecione um candidato da lista
                    </Text>

                    {
                        lCandidatos.length > 0?
                            <Select
                                placeholder="Candidato" 
                                backgroundColor="white"
                                borderRadius="14px"

                                onChange={(e)=>{
                                    SetCandidatoSelect(e.target.value as any)
                                }}
                            >
                                {
                                    lCandidatos.map((user:IUser) =>{
                                        return(<option key={user.id} value={user.id} > {user.first_name} {user.last_name} </option>)
                                    })
                                }
                            </Select>
                        :null
                    }
            </Flex>

            <Button
                isDisabled={(!candidatoSelect)?true : false}
                backgroundColor={(!candidatoSelect)?"gray.500" : "orange"}
                color="white"
                ml={"2%"}
                mt={"1%"}
                borderRadius={"14px"}
                onClick={async()=>{
                    UserSelect(candidatoSelect);
                }}
            >
                gerar vCard

            </Button>
        </Flex>
        {/*Meio*/}

</BackgroundApp>
  );
}

export default Candidatos;