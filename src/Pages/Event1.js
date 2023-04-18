import React from "react";
import Card from "../Components/Cards/Card";
import Head from "../Components/Cards/heading";
import "../Components/Cards/card.scss";
import c1 from '../Components/img&vid/card4.jpg';
import c2 from '../Components/img&vid/card5.jpg';
import c3 from '../Components/img&vid/card2.jpg';
import pdf1 from '../Components/pdfs/pdf1.pdf'
import pdf2 from '../Components/pdfs/pdf2.pdf'
import pdf3 from '../Components/pdfs/pdf3.pdf'
import Image from './Image.jpg';
import Image2 from './Image2.jpg';
import Image3 from './Image3.jpg';


export default function Event1 (){

    const Events = [
        {
            imgsrc : Image,
            t : "<CODE_GROUND>",
            elink : pdf1,
            abt : " The club conducted a Multiple Choice Question Quiz amongst the registered membership aspirants.",
            line :'The challenge began on 7th March 2020. Lets have look at the problem questions'
        },
        {
            imgsrc : Image2,
            t : "<CODE_CHEF>",
            elink : pdf2,
            abt : "Students were provided with coding challenges each day of the week and the best code recipe will be rewarded.",
            line: "The challenge began on 13th March 2020. Lets have look at the problem questions  "
        },
        {
            imgsrc : Image3,
            t : "<CODE_ERA>",
            elink : pdf3,
            abt : "A challenge was organized which comprised of some multiple choice questions and a problem to code",
            line : "The challenge began on 14th March 2020. Lets have look at the problem questions "
        }
    ]
    return(
        <>
        <div  id="forbg">
       <Head title={"Events"}/>
            <div className="top1">
            </div>
            <div id="top2">
             <h5 className="gradient-text" id="text2">  Keeping in mind competitive, demanding, and ever changing computer programming career, CODING PUNDITS aims at organising all possible events that help in staying up to date, creative and versatile in their journeys to master their fields. <></> These events include <b>hackathons</b>,<b> workshops</b>, <b>classes</b>, <b>interactive sessions with alums</b> and other programs that fulfill the overarching goal of making programming exciting and accessible. <div id="spacebw"></div>
    <span><i><b>Follow, celebrate, and support these fantastic events!!!</b></i></span> </h5>
        </div>
       
        <div id="top" ></div>
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                {Events.map(event =>
                    <div key={event.abt} className="col-md-4">
                        <Card  imgsrc={event.imgsrc} t={event.t} abt={event.abt} elink={event.elink} line={event.line} />
                    </div>
                )}
            </div>
        </div>
        </div>
       
        </>
    );
}