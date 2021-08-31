import api from '../api/api'

interface IUser{
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

export const allusers=async()=>{
    const url='/commcepters';
    return await api.get(url)
    .then( res =>{ return res })
    .catch( err =>{ return err })
}


export const userbyid=async(id:number)=>{
    const url='/commcepter';
    return await api.get(`${url}/${id}`)
        .then( res =>{ return res })
        .catch( err =>{ return err })
}


export const qrcodebyidinfile=async(id:number)=>{
    const url = '/vcard/qrcode/commcepter';
    return await api.get(`${url}/${id}?color=#0FD9E7`, {responseType: "arraybuffer"})
    .then( res =>{
       return res
    })
    .catch( err =>{ return err })
}


export const newuser=async(user:IUser)=>{
    const url = '/vcard/qrcode/new';
    return await api.post(url, user,{responseType:"arraybuffer"})
    .then( res =>{ return res })
    .catch( err =>{ return err })
}