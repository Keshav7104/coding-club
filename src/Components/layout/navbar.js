import {BsCodeSlash} from 'react-icons/bs';
import {BsCode} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'
import { useState} from 'react';
import './navbar.css'

export default function Nav({isadmin}) {

    const [ismobile,setIsmobile] =useState(false);
    const [open,setOpen] =useState(false);
    const hamburger = <BsCodeSlash  className='code' onClick={()=>setOpen(!open)}/>
    const close = <BsCode  className='code' onClick={()=>setOpen(!open)} />

    let Links =[ 
        {to : '',name : "Home"},
        {to : './News',name : "News"},
        {to : './Events',name : "Events"},
        {to : './Register',name : "Register /"},
        {to : './Admin',name : "Admin /"}
    ]
    
    const mapping =(link)=>{
        if(isadmin===0&&link.name==="Admin /"){
            return null
        }
        else{
            return (
                <li key={link.name}>
            <NavLink className={({ isActive }) => (isActive ? 'active list-item' : 'list-item')} to={link.to} onClick={()=>setOpen(!open)}>&#x3c;{link.name}&#x3e;
            </NavLink>
        </li>
            )
        }
    }

    const Navlink = <ul>
    {Links.map(mapping)}
    </ul>

    const desk = <nav className="desk" >{Navlink}</nav>
    const mobile =  <nav className='mobile'>{open ? close : hamburger}{open ? Navlink : <></>}</nav>

    

    //    if(window.matchMedia("(max-width: 1000px)").matches){
    //     setIsmobile(true);
    //    }
    //    else{
    //     setIsmobile(false);
    //    }
    

    return(
            <div className='top'>
                <h1 id='coding'>Coding<span id='pundit'>Pundits</span></h1>
                {mobile}
                {desk}
            </div>
    );
}