import {BsCodeSlash} from 'react-icons/bs';
import {BsCode} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'
import { useState,useEffect} from 'react';
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
    if(isadmin===0){
        Links.splice(Links.length-1,1)
     }

    const Navlink = <ul>
    {Links.map(link =>
        <li key={crypto.randomUUID()}>
            <NavLink className={({ isActive }) => (isActive ? 'active list-item' : 'list-item')} to={link.to} onClick={()=>setOpen(!open)}>&#x3c;{link.name}&#x3e;
            </NavLink>
        </li>)}
    </ul>

    const desk = <nav className="desk" >{Navlink}</nav>
    const mobile =  <nav className='mobile'>{open ? close : hamburger}{open ? Navlink : <></>}</nav>

    

    const getwidth =()=>{
       if(window.matchMedia("(max-width: 1000px)").matches){
        setIsmobile(true);
       }
       else{
        setIsmobile(false);
       }
    }
    useEffect(()=>{
        getwidth();
        
    })

    return(
            <div className='top'>
                <h1 id='coding'>Coding<span id='pundit'>Pundits</span></h1>
                {ismobile ? mobile:desk}
            </div>
    );
}