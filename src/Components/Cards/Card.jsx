import React from "react";

 export default function Card (props) {
    return(
<div className="card text-center">
<div className="overflow">
<img src={props.imgsrc} alt="/" />
</div>
<div className="card-body text-dark">
<h4 className="card-title">{props.title}</h4>
<p className="card-text text secondary">{props.abt}</p>
<a href={props.link} className="btn btn-outline-info">{props.linktxt}</a>
</div>
</div>

    );
}