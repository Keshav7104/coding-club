import { TypeAnimation } from 'react-type-animation';
import React from "react";
import './parallex.css';
import Team from '../Cards/team';
import sir from '../img&vid/Subhashis_sir.jpg'
import Head from '../Cards/heading';
function Parallex() {

  const team = [
    {title1 : "Subhashis",
     title2 : "Banerjee",
    img : sir,
    post: "Mentor",
    links : [
      {to : "https://www.facebook.com/subhasish.banerjee.39",icon : 'facebook'}
    ]
  },
  {
    title1 : "Pursottam",
    title2 : "Shah",
    img : "https://avatars.githubusercontent.com/u/81693090",
    post: "Mentor",
    links : [
      {to : "https://www.linkedin.com/in/pursottamsah",icon : 'linkedin'},
    {to : "https://instagram.com/rahulsah6003",icon : 'instagram'},
    {to : "https://github.com/pursottam6003",icon : 'github'}
    ]
  },
  {title1 : "Chandreshekhar",
   title2 : "Tripathi",
  img : "https://avatars.githubusercontent.com/u/68462214",
  post: "Mentor",
  links : [
    {to : "https://www.linkedin.com/in/tripathics",icon : 'linkedin'},
    {to : "https://instagram.com/c_strip.z",icon : 'instagram'},
    {to : "https://github.com/tripathics",icon : 'github'}
  ]
  },
  {
    title1 : "Dev",
    title2 : "Kanyal",
    img : "https://avatars.githubusercontent.com/u/77870205" ,
    post : "Mentor",
    links : [
      {to : "https://www.linkedin.com/in/dev-singh-kanyal",icon : 'linkedin'},
    {to : "https://instagram.com/dev_singh_kanyal",icon : 'instagram'},
    {to : "https://github.com/dev-singh-kanyal",icon : 'github'}
    ]  
  },
  {
    title1 : "Keshav",
    title2 : "Arora",
    img : "https://avatars.githubusercontent.com/u/124811079",
    post : "Site Developer",
    links : [
      {to : "https://www.linkedin.com/in/keshav-arora-a5a20325b",icon : 'linkedin'},
    {to : "https://instagram.com/keshav_7104",icon : 'instagram'},
    {to : "https://github.com/Keshav7104",icon : 'github'}
    ]
  },
  {
    title1 : "Vanshika",
    title2 : "Marwaha",
    img : "https://avatars.githubusercontent.com/u/101502532?v=4",
    post : "Site Developer",
    links : [
      {to : "https://www.linkedin.com/in/vanshika-marwaha",icon : 'linkedin'},
    {to : "https://instagram.com/d_chaotic_vibe",icon : 'instagram'},
    {to : "https://github.com/marwahavanshika",icon : 'github'}
    ]
  },
  {
    title1 : "Sachin",
    title2 : "Pathak",
    img : "https://avatars.githubusercontent.com/u/103988614?v=4",
    post : "Site Developer",
    links : [
      {to : "https://www.linkedin.com/in/sachin-pathak-b52b20215",icon : 'linkedin'},
    {to : "https://instagram.com/sup_sachin07",icon : 'instagram'},
    {to : "https://github.com/sachinpathak123",icon : 'github'}
    ]
  }
]

  return (
    <>
      <section id="wrapper">
        <section className="content1">
          <div className='heading'>
          <p id="abc">CODING_PUNDITS</p>
          <p>
            <TypeAnimation
              sequence={[
                'Eat, Sleep, Code, Repeat', // Types 'One'
                2000, // Waits 2s // Types 'One'
                'Fix the cause, not the symptom', // Types 'One'
                2000, // Waits 1s
                'Hands on Keys, Eyes on Screen.', // Types 'One'
                2000, // Waits 1s
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="type"
            // style={{ fontFamily:'Consolas' ,fontSize: '2em', display: 'inline-block', position:'relative', left:'40%', bottom:'420px' }}
            />
          </p>
          </div>
        </section>
        <section className="hello">
          <Head  title={"Coding Coaches"}/>
          <p>We are an enthusiastic group of coders from National Institute of Technology, Arunachal Pradesh.<br /> We want to replace code fear with inspiration and motivation to learn<br /><br />
            We believe that coding can be really fun and also understand the importance of quantitative skills for professional development.<br />Coding Club is for everyone, regardless of their stream or current level of knowledge<br /><br />
            Coding club is a place that brings people together, regardless of their gender or background.<br /> We all have the right to learn, and we believe learning is more fun and efficient when we help each other along the way.<br /><br />

          </p>
        </section>

        <section className='scroll'>
        <Head title={"Code Squad"} />
          <div className='team'>
            {team.map(member =>
              <Team member={member} key={member.title} />
            )}
          </div>
        </section>
      </section>
    </>
  );
}

export default Parallex