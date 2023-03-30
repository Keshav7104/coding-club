import React from "react";
import './team.css';
import { useEffect } from "react";

const Team =({member,index})=>{
    
    const icons = {
        facebook: 'https://img.icons8.com/fluent/40/000000/facebook-new.png',
        linkedin: 'https://img.icons8.com/fluent/40/000000/linkedin-circled.png',
        instagram: 'https://static.cdninstagram.com/rsrc.php/yv/r/BTPhT6yIYfq.ico',
        github: "https://img.icons8.com/dusk/40/null/github.png"
      }
    
    const left = <div className="box" >
    <div className='profile'>
        <div className='about'>
            <span className='title'>{member.title}</span><br/>
            {member.about}<br />
            <ul>
            {member.links.map(link => (
        <li><a href={link.to}>
          <img alt="" src={icons[link.icon]} width="32" height="32" />
        </a></li>
      ))}
            </ul>
            </div>
            <img src={member.img} alt="team member"/>
            <p className='post'>{member.post}</p>
            </div>
    </div>
    
    const right =  <div className="box box2">
    <div className='profile right'>
      <img src={member.img} alt="team member" />
      <div className='about'>
        <span className='title'>{member.title}</span><br />
        {member.about}<br />
        <ul>
        {member.links.map(link => (
        <li><a href={link.to}>
          <img alt="" src={icons[link.icon]} width="32" height="32" />
        </a></li>
      ))}
        </ul>
      </div>
      <p className='post'>{member.post}</p>
    </div>
  </div>

  let card;
    if(index===0){
        card=left;
        // const first =document.getElementsByClassName("box");
        // first[0].classList.add("first");
    }
    else{
        if(index%2===0){
            card=left;
          }
          else{
            card=right;
            console.log(index);
          }
    }
    useEffect(()=>{
       const first = document.getElementsByClassName("box");
       first[0].classList.add("first");
      });
    return(
        <>
        {card}
        </>
    )
}

export default Team;