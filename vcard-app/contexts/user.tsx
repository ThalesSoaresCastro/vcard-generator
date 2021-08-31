import React,{ createContext, useState, useEffect } from "react";
import Router from 'next/router';


import { qrcodebyidinfile } from '../services/vcardservice';

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

interface UserContextData{
    user: IUser | null;
    qrcode: string;
    userIn: (user:IUser, code?:string ) => Promise<void>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider: React.FC = ({children}) =>{
    
    const [user,setUser] = useState<IUser | null>(null);
    const [qrcode, SetqrCode] = useState<string>('');

    async function userIn(user: IUser, code?: string){
        setUser(user);
        if(user && user.id){    
            const response = await qrcodebyidinfile(user.id);
                if(response.status === 200){
                    let base64ImageString = Buffer.from(response.data, 'binary').toString('base64');
                    await SetqrCode(base64ImageString);
                }
        }
        
        if(code && code.length > 1){
            //console.log(code);
            let base64ImageString = Buffer.from(code, 'binary').toString('base64');
            await SetqrCode(base64ImageString);
        }
        
        Router.push('/vcard');
    }
    
    return(
        <UserContext.Provider
            value={{user:user,qrcode:qrcode, userIn}}
        >
            {children}
        </UserContext.Provider>
    );
}


export default UserContext;
