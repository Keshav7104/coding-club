import { useEffect } from 'react'
import './team.css'

export default function Team({member}){

    const icons = {
        facebook: 'https://img.icons8.com/fluent/40/000000/facebook-new.png',
        linkedin: 'https://img.icons8.com/fluent/40/000000/linkedin-circled.png',
        instagram: 'https://static.cdninstagram.com/rsrc.php/yv/r/BTPhT6yIYfq.ico',
        github: "https://img.icons8.com/dusk/40/null/github.png"
      }

      // useEffect(()=>{
      //   const senior = document.getElementsByClassName("card2");
      //   senior[2].classList.add("senior");
      // })
      // console.log(member.link.to);
    return(
        <>
    <div className="card2">
      <div className="img-bx">
        <img src={member.image} alt="img" />
      </div>
      <div className="content4">
        <div className="detail">
          <h2>{member.title}<br /><span>{member.post}</span></h2>
          <ul className="sci">
            {member.links.map(link=>(
                <li key={crypto.randomUUID()}>
                    <a href={link.to} onClick={()=>console.log(link.to)}>
                        <img src={icons[link.icon]} alt="no..." />
                    </a>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
        </>
    )
}