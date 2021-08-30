import React,{
    useContext,
    useEffect,
    useState,
} from 'react';

import Image from 'next/image';

import{
    Flex,
    Button,
    Text,
    Box,
    Select,
} from '@chakra-ui/react'

import UserContext from '../contexts/user';
import TextHover from '../components/TextHover';
import BackgroundApp from '../components/BackgroundApp';

import iconImage from '../public/iconcommcepta.png';
import logoBottom from '../public/logocommcepta.png';

import Router from 'next/router';

const Vcard: React.FC = () => {
    
    const { user, qrcode } = useContext(UserContext);
    const [value, SetValue] = useState("");

    useEffect(()=>{
        async function img_qrcode(){
            if(qrcode){
                let src = "data:image/png;base64,"+qrcode;
                SetValue(src);

            }    
        }
        img_qrcode();
    },[])


    return(

        <BackgroundApp color={"gray.100"}>
        {/*Meio*/}
        <Flex 
        justifyContent="center"
        flexDirection={["column","row"]}
        alignItems="center" 
        position="absolute"
        top="20%"
        width="100%"
        minH="80%"
        >

            <TextHover 
                color={"blue.400"} 
                bg={"gray.100"} 
                button={true} 
                urlreturn={'/candidatos'}
            />

            <Box
                minW="16%"
                minH="80%"
                p={8}
                borderRadius={"32px"}
                bg="white"
                boxShadow="base"
            >
                <Flex
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <Flex
                        flexDirection="column"
                    >
                        <Text
                            fontSize={"28px"}
                            fontWeight="bold"
                            color="blue.400"
                        >
                            {user?.first_name}
                        </Text>
                        <Text
                            fontSize={"28px"}
                            fontWeight="bold"
                            color="blue.400"
                        >
                            {user?.last_name}
                        </Text>
                    </Flex>
                    {/* icone */}
                    <Image src={iconImage} alt="icon" objectFit="contain" />
                </Flex>
                <Text
                    fontSize={'26px'}
                    textShadow="1px 1px #2E79DE"
                    color={'white'}
                    fontWeight="bold"
                >
                    {user?.title}
                </Text>

                {
                    value && value !== '' && value.length > 1?
                    <Flex
                        minHeight={"80%"}
                        flex="1 1 auto"
                        alignItems="center"
                        justifyContent="center"
                        mt={"15%"}
                    >
                        <Image 
                        src={value} 
                        alt="qrcode" 
                        width="160%"
                        height="160%"
                        layout="fixed"

                    />
                    </Flex>           
                    :null
                }
                <Flex
                    mt={"15%"}
                    mb={"15%"}
                    flex="1 1 auto"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Image 
                    src={logoBottom} 
                    alt="logo2"
                    height={'20px'}
                    width={'120px'} 
                    layout="fixed"
                    />
                </Flex>

            </Box>


        </Flex>
        {/*Meio*/}

        </BackgroundApp>

    );
}

export default Vcard;