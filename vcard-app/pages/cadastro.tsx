import React,{
    useState,
    useContext,
} from 'react';
import{
  Flex,
  Button,
  Text,
  Input,

} from '@chakra-ui/react'

import InputMask from 'react-input-mask';

import TextHover from '../components/TextHover';
import BackgroundApp from '../components/BackgroundApp';

import {
    newuser,
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
    color?:string
}


const Cadastro: React.FC = () => {

  const { userIn } = useContext(UserContext);

  const [first_name , SetFirstName ] = useState('');
  const [last_name , SetLastName ] = useState('');
  const [cellphone , SetCellphone ] = useState('');
  const [email , SetEmail ] = useState('');
  //const [company , SetCompany ] = useState('Commcepta');
  const [title , SetTitle ] = useState('');
  const [street , SetStreet ] = useState('');
  const [city , SetCity ] = useState('');
  const [state, SetState] = useState('');

  //const [cellphone , SetCellphone ] = useState(0);

  const valid_Values = ()=>{
      if(first_name.length < 1 || last_name.length < 1 ||
        cellphone.length < 1 || email.length < 1 ||
         title.length < 1 || street.length < 1 ||
         city.length < 1 || state.length < 1){
            return false;
        }
        return true;
  }


  const numberValidation = (str:string) =>{
    const reg = new RegExp('^[0-9]+$');
    const strClean = str.replace( /[^a-zA-Z0-9]/g,'');
    return reg.test(strClean);
  }

  const validation_email = () => {
    if (email.length > 320) return false

    // todo email deve ter @ e . no seu endereço
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) return false

    const emailRegex =
        /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

    if (!emailRegex.test(email)) return false

    const [local, domain] = email.split('@')

    if (local.length > 64 || local.length === 0) return false

    if (domain.length > 64 || domain.length === 0) return false

    return true
  }

    const CreateNewUser = async() =>{
        const user = {
          first_name:first_name,
          last_name:last_name,
          cellphone:cellphone,
          email:email,
          company:"Commcepta",
          title:title,
          street: street,
          city:city,
          state:state,
          color:'#0FD9E7'
        } as IUser;

        console.log('user: ', user);

        const response = await newuser(user);
        //await userIn(user,response.data);
        if(response.status === 200){
            //let base64ImageString = Buffer.from(response.data, 'binary').toString('base64');
            
            //console.log(response.data);
            await userIn(user, response.data);
        }
   
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
                w={"30%"}
                minH={"50%"}
                flexDirection="column"
            >
             
                {/*primeira linha*/}
                <Flex
                    flexDirection="row"
                    flex="1"
                    justifyContent="space-between"
                    p={"1%"}
                >
                    <Flex
                        flexDirection="column"
                        w={"48%"}
                    >
                        
                        <Text
                            color="blue.400"
                        >
                            Nome
                        </Text>
                        <Input
                            isRequired
                            mt={2}
                            focusBorderColor="teal.200"
                            type="text"
                            bgColor="white"
                            borderRadius="14px"
                            value={first_name}
                            onChange={(e)=>{SetFirstName(e.target.value)}}
                        />
                       
                    </Flex>

                    <Flex
                        flexDirection="column"
                        ml={"4%"}
                        w={"48%"}
                    >
                        <Text
                            color="blue.400"
                        >
                            Sobrenome
                        </Text>
                        <Input
                            isRequired
                            mt={2}
                            focusBorderColor="teal.200"
                            type="text"
                            bgColor="white"
                            borderRadius="14px"
                            value={last_name}
                            onChange={(e)=>{SetLastName(e.target.value)}}
                        />
                    </Flex>
                </Flex>

                {/*segunda linha*/}
                <Flex
                    flexDirection="row"
                    flex="1"
                    justifyContent="space-between"
                    p={"1%"}
                >
                   <Flex
                        flexDirection="column"
                        w={"28%"}
                    >
                        <Text
                            color="blue.400"
                        >
                            Celular
                        </Text>
                        <Input
                            isRequired
                            mt={2}
                            as={InputMask}
                            mask="(**) *****-****"
                            focusBorderColor="teal.200"
                            type="tel" 
                            bgColor="white"
                            borderRadius="14px"
                            value={cellphone}
                            onChange={(e)=>{
                                    SetCellphone(e.target.value);
                            }}
                        />
                    </Flex> 

                    <Flex
                        flexDirection="column"
                        ml={"4%"}
                        w={"68%"}
                    >
                        <Text
                            color="blue.400"
                        >
                            Email
                        </Text>
                        <Input
                            isRequired
                            mt={2}
                            focusBorderColor="teal.200"
                            type="email"
                            bgColor="white"
                            borderRadius="14px"
                            value={email}
                            onChange={(e)=>{SetEmail(e.target.value)}}
                        />
                    </Flex>
                </Flex>


                {/*terceira linha*/}
                <Flex
                    flexDirection="row"
                    flex="1"
                    justifyContent="space-between"
                    p={"1%"}
                >
                    <Flex
                        flexDirection="column"
                        w={"48%"}
                    >
                        <Text
                            color="blue.400"
                        >
                            Cargo
                        </Text>
                        <Input
                            isRequired
                            mt={2}
                            focusBorderColor="teal.200"
                            type="text"
                            bgColor="white"
                            borderRadius="14px"
                            value={title}
                            onChange={(e)=>{SetTitle(e.target.value)}}
                        />
                    </Flex>

                    <Flex
                        flexDirection="column"
                        ml={"4%"}
                        w={"48%"}
                    >
                        <Text
                            color="blue.400"
                        >
                            Estado
                        </Text>
                        <Input
                            isRequired
                            mt={2}
                            focusBorderColor="teal.200"
                            type="text"
                            bgColor="white"
                            borderRadius="14px"
                            value={state}
                            onChange={(e)=>{SetState(e.target.value)}}
                        />
                    </Flex>
                </Flex>


                {/*Quarta linha*/}
                <Flex
                    flexDirection="row"
                    flex="1"
                    justifyContent="space-between"
                    p={"1%"}
                >
                    <Flex
                        flexDirection="column"
                        w={"38%"}
                    >
                        <Text
                            color="blue.400"
                        >
                            Cidade
                        </Text>
                        <Input
                            isRequired
                            mt={2}
                            focusBorderColor="teal.200"
                            type="text"
                            bgColor="white"
                            borderRadius="14px"
                            value={city}
                            onChange={(e)=>{SetCity(e.target.value)}}
                        />
                    </Flex>

                    <Flex
                        flexDirection="column"
                        ml={"4%"}
                        w={"58%"}
                    >
                        <Text
                            color="blue.400"
                        >
                            Rua
                        </Text>
                        <Input
                            isRequired
                            mt={2}
                            focusBorderColor="teal.200"
                            type="text"
                            bgColor="white"
                            borderRadius="14px"
                            value={street}
                            onChange={(e)=>{SetStreet(e.target.value)}}
                        />
                    </Flex>
                </Flex>


                <Button
                    isDisabled={(!valid_Values())?true:false}
                    m={"1%"}
                    backgroundColor={valid_Values()?"orange":"gray.500"}
                    color="white"
                    borderRadius="14px"
                    w={"20%"}

                    onClick={async()=>{
                        valid_Values() && numberValidation(cellphone)  && validation_email()?
                            await CreateNewUser(): 
                            alert('Verifique os campos do formulário.')
                    }}

                >
                    gerar vCard
                </Button>

            
            </Flex>
        </Flex>
        {/*Meio*/}

</BackgroundApp>
  );
}

export default Cadastro;