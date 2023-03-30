import { TypeAnimation } from 'react-type-animation';
import React from "react";
import './parallex.css';
import binary from './binary1.jpg';
import Team from '../Cards/team';
// import background from './background.png'
// import foreground from './foreground.png'
 function Parallex () {

  const team = [
    {title : "Subhashis Banarjee",
    about : "cse faculty of our collage under them we all learn coding skills",
    img : binary,
    post: "Our Mentor",
    links : [
      {to : "",icon : 'linkedin'}
    ]
  },
  {title : "Chandreshekhar",
  about : "3rd year student of Btech under cse department",
  img : "https://avatars.githubusercontent.com/u/68462214",
  post: "Our Mentor",
  links : [
    {to : "",icon : 'linkedin'}
  ]
  },
  {
    title : "Purshotam",
    about : "3rd year student of Btech under cse department",
    img : "https://avatars.githubusercontent.com/u/81693090",
    post: "Our Mentor",
    links : [
      {to : "",icon : 'linkedin'}
    ]
  },
  {
    title : "Dev Singh Kanyal",
    about : "3rd year student of Btech under cse Department",
    img : "https://avatars.githubusercontent.com/u/77870205" ,
    post : "Our Mentor",
    links : [
      {to : "",icon : 'linkedin'}
    ]  
  },
  {
    title : "Keshav Arora",
    about : "2nd year student of B.tech under CSE department",
    img : "https://avatars.githubusercontent.com/u/124811079",
    post : "Site Developer",
    links : [
      {to : "",icon : 'linkedin'},
      {to : "",icon : 'instagram'},
      {to: "",icon : 'github'}
    ]
  },
  {
    title : "Vanshika Marwaha",
    about : "2nd year student of B.tech under CSE department",
    img : "https://avatars.githubusercontent.com/u/101502532?v=4",
    post : "Site Developer",
    links : [
      {to : "",icon : 'linkedin'},
      {to : "",icon : 'instagram'},
      {to: "",icon : 'github'}
    ]
  },
  {
    title : "Sachin Pathak",
    about : "2nd year student of B.tech under CSE department",
    img : "https://avatars.githubusercontent.com/u/103988614?v=4",
    post : "Site Developer",
    links : [
      {to : "",icon : 'linkedin'},
      {to : "",icon : 'instagram'},
      {to: "",icon : 'github'}
    ]
  }
]

return(
    <>
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
        'Eat,Sleep,', // Types 'One'
        1000, // Waits 1s
        'Code,Repeat.', // Deletes 'One' and types 'Two'
        2000, // Waits 2s // Types 'One'
        'Fix the cause,', // Types 'One'
        1000, // Waits 1s
        'not the symptoms.', // Types 'One'
        2000, // Waits 1s
        'Hands on Keys,', // Types 'One'
        1000, // Waits 1s
        'Eyes on Screens.', // Types 'One'
        2000, // Waits 1s
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="type"
      style={{ fontFamily:'Consolas' ,fontSize: '2em', display: 'inline-block', position:'relative', left:'50%', bottom:'420px' }}
    />
    <div className="content2">
        <h2  id='coach'>CODING COACHES</h2>
        <p class="boxcontent"><span className="boxtxt1">We are an enthusiastic group of coders from National Institute of Technology, Arunachal Pradesh.<br /> We want to replace code fear with inspiration and motivation to learn.</span> <br /><span className="boxtxt2">We believe that coding can be really fun and also understand the importance of quantitative skills for professional development.<br />Coding Club is for everyone, regardless of their stream or current level of knowledge.</span><br /> <span className="boxtxt3">Coding club is a place that brings people together, regardless of their gender or background.<br /> We all have the right to learn, and we believe learning is more fun and efficient when we help each other along the way.</span>

</p>
</div>
</div>

</div>
<div className="smain">
<div className="content3">
    <div className='team'>Our team</div>
    {team.map((member,index)=>
    <Team index={index} member={member} link={member.links}/>
    )}
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