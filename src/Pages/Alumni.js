import React from 'react'
import './Alumni.scss'
import Team from '../Components/Cards/team'
function Alumni() {
const alumni =[
    {
        img: "https://avatars.githubusercontent.com/u/124811079",
        title:"Purushottam Shah",
        batch:"2020-2024",
        post:"Software Engineer",
    },
    {
        img: "https://avatars.githubusercontent.com/u/124811079",
        title:"Purushottam Shah",
        batch:"2020-2024",
        post:"Software Engineer",
    },
    {
        img: "https://avatars.githubusercontent.com/u/124811079",
        title:"Purushottam Shah",
        batch:"2020-2024",
        post:"Software Engineer",
    },

]
  return (
    <>
        <div className="alumnibg">
         <h1 className="alumnititle">ALUMNI ASSOCIATION</h1>
  <br />
         <div className="CaRd">
    <div className='alumnicard'>
  {alumni.map((member, index) => (
              <div key={index} className="alumni-member">
                <img src={member.img} alt={member.title} id="alumniimg" />
                <h2>{member.title}</h2>
                <p>{member.batch}</p>
                <p>{member.post}</p>
              </div>
            ))}
            </div>
</div>
</div>
        
    </>
  )
}

export default Alumni
