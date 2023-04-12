import Navlink from './Navlinks';
import {BsCodeSlash} from 'react-icons/bs';
import {BsCode} from 'react-icons/bs'
import { useState } from 'react';

export default function Mobile(){

 const [open,setOpen] =useState(false);
    const hamburger =<BsCodeSlash  className='code' onClick={()=>setOpen(!open)}/>
    const close = <BsCode  className='code' onClick={()=>setOpen(!open)}/>
    return(
        <>
        <nav className='mobile'>
        {open ? close : hamburger}
        {open && <Navlink />}
        </nav>
        </>
    )
}