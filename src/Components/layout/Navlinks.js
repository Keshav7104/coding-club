import './navbar.css'
import { NavLink } from "react-router-dom";

export default function Navlink(){
    return(
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
    )
}