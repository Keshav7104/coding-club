
import { NavLink } from "react-router-dom";

export default function Navlink(){
    const links =[
        {to : '',name : "Home"},
        {to : './News',name : "News"},
        {to : './Events',name : "Events"},
        {to : './Register',name : "Register"},
        {to:'./Admin',name : 'Admin'}
    ]

    const isadmin = false
    if(!isadmin){
        links.pop();
    }

    return(
        <ul>
            {links.map(link =>
        <li key={crypto.randomUUID()}>
        <NavLink className={({ isActive }) => (isActive ? 'active list-item' : 'list-item')} to={link.to}>&#x3c;{link.name}&#x3e;
            </NavLink>
            </li>)}
    </ul>
    )
}