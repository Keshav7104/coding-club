import './navbar.css'
// import useLocalStorage from 'react-dom';
export default function Nav() {

    // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

    // const toggleTheme =() =>{
    //     const newTheme = theme === 'light' ? 'dark' : 'light';
    //     setTheme(newTheme);
    // }


    return(
        <div className="nav theme-light" id="theme">
            <h1>Coding<span>Pundits</span></h1>
        <ul>
           <li  >
                <a className="list-item" href="#">Home
                </a>
            </li> 
            <li  >
                <a className="list-item" href="#">Resources
                </a>
            </li>
            <li  >
                <a className="list-item" href="#">Events
                </a>
            </li>
            <li  >
                <a className="list-item" href="#">Our Team
                </a>
            </li>
            <li  >
                <a className="list-item" href="#">Alumni
                </a>
            </li>
            <li  >
                <a className="list-item" href="#">Register
                </a>
            </li>
            {/* <li>
                <a className="list-item" href="#">contact_us
                </a>
            </li> */}
        </ul>
        {/* <button onClick={toggleTheme()}>theme</button> */}
        </div>
    );
}