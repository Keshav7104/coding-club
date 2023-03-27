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
                <p id="abc">CODING_PUNDITS</p>
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
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontFamily:'Consolas' ,fontSize: '2em', display: 'inline-block', position:'relative', left:'550px', bottom:'420px' }}
    />
    <div className="content2">
        <h2 className="display-4 text-center fw-boldest">CODING COACHES</h2>
        <p class="boxcontent"><span className="boxtxt1">We are an enthusiastic group of coders from National Institute of Technology, Arunachal Pradesh.<br /> We want to replace code fear with inspiration and motivation to learn.</span> <br /><span className="boxtxt2">We believe that coding can be really fun and also understand the importance of quantitative skills for professional development.<br />Coding Club is for everyone, regardless of their stream or current level of knowledge.</span><br /> <span className="boxtxt3">Coding club is a place that brings people together, regardless of their gender or background.<br /> We all have the right to learn, and we believe learning is more fun and efficient when we help each other along the way.</span>

</p>
</div>
</div>

</div>
<div className="smain">
<div className="content3" id='fuck'>
    <div className='team'>Our team</div>
        <div className="box">
                <div className='profile'>
                    <div className='about'>
                        <span className='title'>Subhashis Banrjee</span>
                        <br />cse faculty of our collage<br />under them we all learn coding skills<br />
                        <ul>
                          <li><a href='https://www.linkedin.com/in/pinakeswar-mahanta-30592616'>
                          <img src='https://img.icons8.com/fluent/40/000000/linkedin-circled.png' alt='linkedin' width="20" height="20"/></a>
                          </li>
                          {/* <li><a href='#'></a>
                          <img src='https://img.icons8.com/fluent/40/000000/linkedin-circled.png' alt='linkedin' width="20" height="20"/>
                          </li> */}
                        </ul>
                        </div>
                        <div className='image'></div>
                        <p className='post'>Our Mentor</p>
                        </div>
        </div> 
        <div className="box box2">fuck!!!@!
        </div>
        <div className="box"></div>
        <div className="box box2" />
        <div className="box" />
        <div className="box box2"></div>
        <div className="box" />
        </div>
</div>

                </div>
        </div>
      </div>
      </div>






     </>
);
}

export default Parallex