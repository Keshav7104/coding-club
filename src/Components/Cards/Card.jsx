import React from "react";
import '../../Pages/Event1.css'

 export default function Card (props) {
    return(
<div className="card text-center">
<div className="overflow">
<img src={props.imgsrc} alt="/"  className="card-img-top"/>
</div>
<div className="card-body text-dark">
<h4 className="card-title">{props.t}</h4>
<div className="card-text text secondary"><div><div>{props.abt}</div></div><br /><br /><br />{props.line}</div>
<a href={props.elink} target={"blank"} className="btn btn-outline-info">sneak into the questions</a>
</div>
</div>
    );
}