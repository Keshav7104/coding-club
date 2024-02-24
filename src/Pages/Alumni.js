import React from 'react'
import './Alumni.scss'
import Team from '../Components/Cards/team'
function Alumni() {
const alumni =[
    {
        img: "https://avatars.githubusercontent.com/u/81693090?v=4",
        title:"Purushottam Shah",
        batch:"2020-2024",
        post:"Software Engineer",
    },
    {
        img: "https://avatars.githubusercontent.com/u/68462214?v=4",
        title:"Chandra\nshekhar\nTripathi",
        batch:"2020-2024",
        post:"Software Engineer",
    },
    {
        img: "https://avatars.githubusercontent.com/u/77870205?v=4",
        title:"Dev Singh Kanyal",
        batch:"2020-2024",
        post:"Software Engineer",
    },

]
  return (
    <>
        <div className="alumnibg">
         <h1 className="alumnititle">ALUMNI COUP</h1>
  <br />
         <div className="CaRd">
    <div className='alumnicard'>
  {alumni.map((member, index) => (
              <div key={index} className="alumni-member">
                <img src={member.img} alt={member.title} id="alumniimg" />
                <h5 id="alumnititle">{member.title}</h5>
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
