import React from "react";
import './card.scss'

 export default function Card (props) {
    return(
<div className="card text-center">
<div className="overflow">
<img src={props.imgsrc} alt="/"  className="card-img"/>
</div>
<div className="card-body text-dark">
<h4 className="card-title">{props.t}</h4>
<div className="card-text text secondary" ><div><div>{props.abt}</div></div><br />{props.line}</div>
<div className="BuTTon"><a href={props.elink} target={"blank"} className="btn">sneak into the questions</a></div>
</div>
</div>

    );
    }