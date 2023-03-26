import './navbar.css'// styling
import { NavLink } from 'react-router-dom';//replacement of anchor tags



export default function Nav() {

    return(
            <div className='top'>
                <h1 id='coding'>Coding<br className='Small'/><span id='pundit'>Pundits</span></h1>
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
            </div>
    );
}