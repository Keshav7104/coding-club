import './navbar.css'// styling
import { NavLink } from 'react-router-dom';//replacement of anchor tags
// import{useThemeDetector} from '../Hooks/Theme' //this hook would be used in loading of page it is here just to demostrate
//this is subjected to change
// import { useEffect,useContext } from 'react';//to get theme of user's browser and info from main page
// import {Info} from '../../App'//info passing parameter from main page


export default function Nav() {

    // const {isadmin} =useContext(Info);//to know if user is admin or not

    //to get current theme of user's browser
    // const isdark =useThemeDetector();
    // const themecheck = () =>{
    // if(isadmin){
    //     let ele = document.getElementById("Admin");
    //     ele.classList.remove("Admin");
    //     ele.classList.add("Display");
    // }
    // if(isdark){
    //     let ele = document.getElementById("theme-div");
    //     ele.classList.add("theme-dark");
    //     ele.classList.remove("theme-light");
    // }
    // }

    // useEffect(() => {
    //     themecheck();
    // });

    //to change theme by clicking theme button
    // const changetheme =() =>{
    //     let ele=document.getElementById("theme-div");//ele=div given for theme
    //     if(ele.classList.contains("theme-light")){
    //     ele.classList.remove("theme-light");
    //     ele.classList.add("theme-dark");
    //     let pu =document.getElementById("pundit")
    //     pu.classList.add("logo");
    //     let co = document.getElementById("coding");
    //     co.classList.remove("logo");
    //     }
    //     else{
    //         ele.classList.remove("theme-dark");
    //         ele.classList.add("theme-light");
    //         let pu =document.getElementById("pundit")
    //         pu.classList.remove("logo");
    //         let co = document.getElementById("coding");
    //         co.classList.add("logo");
    //     }
    // }

    return(
            <div className='top'>
                <h1 id='coding'>Coding<span id='pundit'>Pundits</span></h1>
                <ul>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'active list-item' : 'list-item')} to='' >&#x3c;Home&#x3e;
                        </NavLink>
                    </li> 
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'active list-item' : 'list-item')} to='./News'>&#x3c;News&#x3e;
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'active list-item' : 'list-item')} to='./Events'>&#x3c;Events&#x3e;
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'active list-item' : 'list-item')} to='/Register'>&#x3c;Register /&#x3e;
                        </NavLink>
                    </li>
                </ul>
                {/* <button onClick={() => changetheme()}>A</button> */}
            </div>
    );
}