import './navbar.css'
import { NavLink } from 'react-router-dom';
import{useThemeDetector} from '../Hooks/Theme' //this hook would be used in loading of page it is here just to demostrate
//this is subjected to changed
import { useEffect } from 'react';


export default function Nav() {


    const isdark =useThemeDetector();
    const themecheck = () =>{
    
    if(isdark){
        let ele = document.getElementById("theme-div");
        ele.classList.add("theme-dark");
        ele.classList.remove("theme-light");
    }
    }

    useEffect(() => {
        themecheck();
    });

    const changetheme =() =>{
        let ele=document.getElementById("theme-div");
        if(ele.classList.contains("theme-light")){
        ele.classList.remove("theme-light");
        ele.classList.add("theme-dark");
        let pu =document.getElementById("pundit")
        pu.classList.add("logo");
        let co = document.getElementById("coding");
        co.classList.remove("logo");
        }
        else{
            ele.classList.remove("theme-dark");
            ele.classList.add("theme-light");
            let pu =document.getElementById("pundit")
            pu.classList.remove("logo");
            let co = document.getElementById("coding");
            co.classList.add("logo");
        }
    }

    return(
        <div className='theme-light'  id="theme-div">
        <div className='top'>
            <h1 id='coding' className='logo'>Coding<span id='pundit'>Pundits</span></h1>
            <ul>
           <li  >
                <NavLink className="list-item" to='./'>Home
                </NavLink>
            </li> 
            <li  >
                <NavLink className="list-item" to='./'>Resources
                </NavLink>
            </li>
            <li  >
                <NavLink className="list-item" to='./events'>Events
                </NavLink>
            </li>
            <li  >
                <NavLink className="list-item" to='./'>Our Team
                </NavLink>
            </li>
            <li  >
                <NavLink className="list-item" to='./'>Alumni
                </NavLink>
            </li>
            <li  >
                <NavLink className="list-item" to='/Register'>Register
                </NavLink>
            </li>
            </ul>
            <button onClick={() => changetheme()}>A</button>
        </div>
 
        </div>
    );
}