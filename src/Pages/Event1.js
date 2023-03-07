import React from "react";
import Card from "../Components/Cards/Card";
import "./Event1.css";
import c1 from '../Components/img&vid/card4.jpg';
import c2 from '../Components/img&vid/card5.jpg';
import c3 from '../Components/img&vid/card2.jpg';
import pdf1 from '../Components/pdfs/pdf1.pdf'
import pdf2 from '../Components/pdfs/pdf2.pdf'
import pdf3 from '../Components/pdfs/pdf3.pdf'


export default function Event1 (){
    return(
        <>
       <div id="toptext"><h1>~:EVENTS:~</h1> </div>
            <div className="top1">
            </div>
            <div id="top2">
             <h5 className="gradient-text" id="text2">  Keeping in mind competitive, demanding, and ever changing computer programming career, CODING PUNDITS aims at organising all possible events that help in staying up to date, creative and versatile in their journeys to master their fields. <></> These events include <b>hackathons</b>,<b> workshops</b>, <b>classes</b>, <b>interactive sessions with alums</b> and other programs that fulfill the overarching goal of making programming exciting and accessible. <div id="spacebw"></div>
    <h4><i><b>Follow, celebrate, and support these fantastic events!!!</b></i></h4> </h5>
        </div>
       
        <div id="top" ></div>
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card imgsrc={c1}  t={"CODEGROUND \n ~ </inception>"} 
                    abt={<div>
                     <p> The club conducted a Multiple Choice Question Quiz amongst the registered membership aspirants. It was the first activity of our club.
                    </p>
                  {'\n'}{'\n'}{'\n'}  The challenge began on 7th March 2020. Lets have look at the problem questions 
                    </div>}
                     elink={pdf1}/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={c2} t="~COOK THE CODE~" abt={<div> <p>Students were provided with coding challenges each day of the week and the best code recipe will be rewarded.</p> {'\n'}The challenge began on 13th March 2020. Lets have look at the problem questions  </div>}
                    
                    
                     elink={pdf2} />
                </div>
                <div className="col-md-4">
                     <Card imgsrc={c3} t="CODEGROUND ~ <war-II/>"  abt={<div> <p> A challenge was organized which comprised of some multiple choice questions and a problem to code. The winners were awarded with  goodies.
                    </p>
                    {'\n'} The challenge began on 14th March 2020. Lets have look at the problem questions </div>} elink={pdf3}/></div>
            </div>
        </div>
       
        </>
    );
}