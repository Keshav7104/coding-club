import { TypeAnimation } from 'react-type-animation';
import React from "react";
import './parallex.css';
// import background from './background.png'
// import foreground from './foreground.png'
 function Parallex () {

return(
    <>
    {/* <div id="line"></div> */}
   <div id="wrapper">


    
   
<div className="container1">
<div className="photo">
         <div className="loading">
        <div className="loading-text">
            <div className="content">
          </div>
          <div className="content1">
                <p id="abc">CODINGPUNDITS</p>
                <TypeAnimation
      sequence={[
        'Eat Sleep,', // Types 'One'
        1000, // Waits 1s
        'Code Repeat.', // Deletes 'One' and types 'Two'
        2000, // Waits 2s // Types 'One'
        'Fix the cause,', // Types 'One'
        1000, // Waits 1s
        'not the symptom.', // Types 'One'
        2000, // Waits 1s
        'Hands on Keys,', // Types 'One'
        1000, // Waits 1s
        'Eyes on Screens.', // Types 'One'
        2000, // Waits 1s
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontFamily:'Consolas' ,fontSize: '2em', display: 'inline-block', position:'relative', left:'550px', bottom:'420px' }}
    />
                </div>
        </div>
      </div>
      </div>

</div>
{/* 
<section id="box">
    <h2 className="secHeading">Hands on Keys, Eyes on Screens!!!</h2>
    <p className="text1">
    Keeping in mind competitive, demanding, and ever changing computer programming career, CODING PUNDITS aims at organising all possible events that helpn in staying up to date, creative and versatile in their journeys to master their fields.
        <hr />
        These events include <b>hackathons</b>,<b> workshops</b>, <b>classes</b>, <b>interactive sessions with alums</b> and other programs that fulfill the overarching goal of making programming exciting and accessible.
        <hr />

     <h4><i><b>Follow, celebrate, and support these fantastic events!!!</b></i></h4>
        
    </p>
    <div className="bg bg1">
        <h2 className="desc"><b>INCEPTION</b> </h2>
        <p> <i>let the game begin</i></p>
    </div>
    <p className="text1">
       The club conducted a Multiple Choice Question Quiz. It was amongst the students that had registered themselves for the membership of coding club. It was the first activity of our club and took place on 7th March 2020. 
        <hr></hr>
       Being the first activity here at Coding Pundits, the activity has a historical importance for the club and we are more than happy to showcase the questions asked and also the list of students selected in our first ever hunt,
    </p>
    <div className="bg bg2">
        <h2 className="desc">PARA GLIDING</h2>
    </div>
    <p className="text1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus commodi alias? Veritatis,
        eligendi nisi. Amet exercitationem, recusandae dolore corrupti laborum aperiam repellendus natus
        voluptatem quam atque aliquam beatae. Odit deserunt nisi optio eveniet? Aliquam possimus molestiae,
        ullam illum accusamus autem accusantium! Voluptate laboriosam eum saepe ex veritatis est? Numquam eaque
        autem labore provident dolorum, velit omnis mollitia eos adipisci!
        <hr></hr>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, itaque hic tempore rem eveniet sed
        repudiandae molestiae magnam aut quod consequatur, harum, totam beatae fugiat ipsam? Explicabo,
        blanditiis quod similique fugiat fugit ea expedita deleniti doloribus, delectus perferendis, tempore
        amet maiores libero sapiente voluptatem reprehenderit? Illum alias commodi cupiditate corporis mollitia
        ab quaerat, ipsum est excepturi vitae a sunt optio.
    </p>
    <div className="bg bg3">
        <h2 className="desc">SURFING</h2>
    </div>
    <p className="text1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui necessitatibus commodi alias? Veritatis,
        eligendi nisi. Amet exercitationem, recusandae dolore corrupti laborum aperiam repellendus natus
        voluptatem quam atque aliquam beatae. Odit deserunt nisi optio eveniet? Aliquam possimus molestiae,
        ullam illum accusamus autem accusantium! Voluptate laboriosam eum saepe ex veritatis est? Numquam eaque
        autem labore provident dolorum, velit omnis mollitia eos adipisci!
        <hr></hr>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, itaque hic tempore rem eveniet sed
        repudiandae molestiae magnam aut quod consequatur, harum, totam beatae fugiat ipsam? Explicabo,
        blanditiis quod similique fugiat fugit ea expedita deleniti doloribus, delectus perferendis, tempore
        amet maiores libero sapiente voluptatem reprehenderit? Illum alias commodi cupiditate corporis mollitia
        ab quaerat, ipsum est excepturi vitae a sunt optio.
    </p>
    </section>  */} 

</div>

     </>
);
}

export default Parallex