import React from "react";
import Card from "../Components/Cards/Card";
import "./Event1.css";
import c1 from '../Components/img&vid/card4.jpg';
import c2 from '../Components/img&vid/card5.jpg';
import c3 from '../Components/img&vid/card2.jpg'

export default function Event1 (){
    return(
        <>
       
        <div id="top" ></div>
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card imgsrc={c1}  t="CODEGROUND ~  <inception/>"  abt={<div> <p> The club conducted a Multiple Choice Question Quiz amongst the registered membership aspirants. It was the first activity of our club.
</p> <hr></hr> The challenge began on 7th March 2020. Lets have look at the problem questions </div>}
                     elink={'../../Components/pdfs/pdf1.pdf'}/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={c2} t="~COOK THE CODE~" abt={<div> <p>Students were provided with coding challenges each day of the week and the best code recipe will be rewarded.</p> <hr></hr> The challenge began on 13th March 2020. Lets have look at the problem questions  </div>}
                    
                    
                     elink={<a> </a>} />
                </div>
                <div className="col-md-4">
                     <Card imgsrc={c3} t="CODEGROUND ~ <war-II/>"  abt={<div> <p> A challenge was organized which comprised of some multiple choice questions and a problem to code. The winners were awarded with  goodies.
</p> <hr></hr> The challenge began on 14th March 2020. Lets have look at the problem questions </div>}/></div>
            </div>
        </div>
       
        </>
    );
}