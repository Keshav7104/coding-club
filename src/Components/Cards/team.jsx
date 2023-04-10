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
    
    const left =   <div className='box3'>
    <div className='detail2'>
      <div className='title'>{member.title}</div>
      <div className='about'>{member.about}</div>
      </div>
    <div className='image2'><img src={member.img} alt="team-member" /></div>
    <div className='links2'>
      <ul>
      {member.links.map(link => (
        <li><a href={link.to}>
          <img alt="" src={icons[link.icon]} width="32" height="32" />
        </a></li>
      ))}
      </ul>
    </div>
    <div className='post2'>
      <div className='border'>{member.post}</div>
    </div>
  </div>
    
    const right =      <div className='last'>
    <div className='image'>
      <img src={member.img} alt="team-member" />
    </div>
    <div className='detail'>
      <div className='title'>{member.title}</div>
      <br /><div className='about'>{member.about}</div>
    </div>
    <div className='post1'>
      <div className='border'>{member.post}</div>
    </div>
    <div className='links'>
    <ul>
    {member.links.map(link => (
        <li><a href={link.to}>
          <img alt="" src={icons[link.icon]} width="32" height="32" />
        </a></li>
      ))}
    </ul>
    </div> 
  </div>

  let card;
    if(index===0){
        card=left;
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
       const first = document.getElementsByClassName("box3");
       first[0].classList.add("first");
      });
    return(
        <>
        {card}
        </>
    )
}

export default Team;