import { BsCodeSlash } from "react-icons/bs";
import { BsCode } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./navbar.scss";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const hamburger = (
    <BsCodeSlash className="code" onClick={() => setOpen(!open)} />
  );
  const close = <BsCode className="code" onClick={() => setOpen(!open)} />;

  let Links = [
    { to: "", name: "Home" },
    { to: "./News", name: "News" },
    { to: "./Events", name: "Events" },
    { to: "./Register", name: "Register /" },
  ];

  const mapping = (link) => {
    return (
      <li key={link.name}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active list-item" : "list-item"
          }
          to={link.to}
          onClick={() => setOpen(!open)}
        >
          &#x3c;{link.name}&#x3e;
        </NavLink>
      </li>
    );
  };

  const Navlink = <ul>{Links.map(mapping)}</ul>;

  const desk = <nav className="desk">{Navlink}</nav>;
  const mobile = (
    <nav className="mobile">
      {open ? close : hamburger}
      {open ? Navlink : <></>}
    </nav>
  );

  return (
    <nav className="top">
      <h1 id="coding">
        Coding<span id="pundit">Pundits</span>
      </h1>
      {mobile}
      {desk}
    </nav>
  );
}
