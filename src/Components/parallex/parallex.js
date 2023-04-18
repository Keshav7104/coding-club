import { TypeAnimation } from 'react-type-animation';
import React from "react";
import './parallex.scss';
import Team from '../Cards/team';
import sir from '../img&vid/Subhashis_sir.jpg'
import Head from '../Cards/heading';
import Card from "../Cards/Card";
import pdf1 from '../pdfs/pdf1.pdf'
import pdf2 from '../pdfs/pdf2.pdf'
import pdf3 from '../pdfs/pdf3.pdf'
import Image from '../../Pages/Image.jpg';
import Image2 from '../../Pages/Image2.jpg';
import Image3 from '../../Pages/Image3.jpg';

function Parallex() {

  const team = [
    {
      title1: "Sachin",
      title2: "Pathak",
      img: "https://avatars.githubusercontent.com/u/103988614?v=4",
      post: "Site Developer",
      links: [
        { to: "https://www.linkedin.com/in/sachin-pathak-b52b20215", icon: 'linkedin' },
        { to: "https://instagram.com/sup_sachin07", icon: 'instagram' },
        { to: "https://github.com/sachinpathak123", icon: 'github' }
      ]
    },
    {
      title1: "Subhashis",
      title2: "Banerjee",
      img: sir,
      post: "Mentor",
      links: [
        { to: "https://www.facebook.com/subhasish.banerjee.39", icon: 'facebook' }
      ]
    },
    {
      title1: "Pursottam",
      title2: "Shah",
      img: "https://avatars.githubusercontent.com/u/81693090",
      post: "Mentor",
      links: [
        { to: "https://www.linkedin.com/in/pursottamsah", icon: 'linkedin' },
        { to: "https://instagram.com/rahulsah6003", icon: 'instagram' },
        { to: "https://github.com/pursottam6003", icon: 'github' }
      ]
    },
    {
      title1: "Chandreshekhar",
      title2: "Tripathi",
      img: "https://avatars.githubusercontent.com/u/68462214",
      post: "Mentor",
      links: [
        { to: "https://www.linkedin.com/in/tripathics", icon: 'linkedin' },
        { to: "https://instagram.com/c_strip.z", icon: 'instagram' },
        { to: "https://github.com/tripathics", icon: 'github' }
      ]
    },
    {
      title1: "Dev",
      title2: "Kanyal",
      img: "https://avatars.githubusercontent.com/u/77870205",
      post: "Mentor",
      links: [
        { to: "https://www.linkedin.com/in/dev-singh-kanyal", icon: 'linkedin' },
        { to: "https://instagram.com/dev_singh_kanyal", icon: 'instagram' },
        { to: "https://github.com/dev-singh-kanyal", icon: 'github' }
      ]
    },
    {
      title1: "Keshav",
      title2: "Arora",
      img: "https://avatars.githubusercontent.com/u/124811079",
      post: "Site Developer",
      links: [
        { to: "https://www.linkedin.com/in/keshav-arora-a5a20325b", icon: 'linkedin' },
        { to: "https://instagram.com/keshav_7104", icon: 'instagram' },
        { to: "https://github.com/Keshav7104", icon: 'github' }
      ]
    },
    {
      title1: "Vanshika",
      title2: "Marwaha",
      img: "https://avatars.githubusercontent.com/u/101502532?v=4",
      post: "Site Developer",
      links: [
        { to: "https://www.linkedin.com/in/vanshika-marwaha", icon: 'linkedin' },
        { to: "https://instagram.com/d_chaotic_vibe", icon: 'instagram' },
        { to: "https://github.com/marwahavanshika", icon: 'github' }
      ]
    }
  ]


  const Events = [
    {
      imgsrc: Image,
      t: "<CODE_GROUND>",
      elink: pdf1,
      abt: " The club conducted a Multiple Choice Question Quiz amongst the registered membership aspirants.",
      line: 'The challenge began on 7th March 2020. Lets have look at the problem questions'
    },
    {
      imgsrc: Image2,
      t: "<CODE_CHEF>",
      elink: pdf2,
      abt: "Students were provided with coding challenges each day of the week and the best code recipe will be rewarded.",
      line: "The challenge began on 13th March 2020. Lets have look at the problem questions  "
    },
    {
      imgsrc: Image3,
      t: "<CODE_ERA>",
      elink: pdf3,
      abt: "A challenge was organized which comprised of some multiple choice questions and a problem to code",
      line: "The challenge began on 14th March 2020. Lets have look at the problem questions "
    }
  ]


  const Move = (direction) => {
    const cards = document.getElementById("carousal");
    if (direction === 'right') {
      cards.classList.add("moveright")
    }
    else if (direction === 'left') {
      cards.classList.add("moveleft")
    }
    setTimeout(() => {
      if (direction === 'right') {
        cards.classList.remove("moveright");
        cards.appendChild(
          cards.removeChild(cards.firstChild)
        );
      }
      else if (direction === 'left') {
        cards.classList.remove("moveleft");
        cards.prepend(
          cards.removeChild(cards.lastChild)
        );
      }
    }, 650);
  }

  return (
    <>
      <section id="wrapper">
        <section className="content1">
          <div className='background'></div>
          <div className='heading'>
            <p id="abc">CODING_<br className='break' />PUNDITS</p>
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
              />
            </p>
          </div>
        </section>
        <section className="hello">
          <Head title={"Recent Events"} />
          {Events.map(event=>(
             <Card  imgsrc={event.imgsrc} t={event.t} abt={event.abt} elink={event.elink} line={event.line} />
          ))}
        </section>

        <section className='scroll'>
          <Head title={"Code Squad"} />
          <div className='team-wrapper'>
            <div className='team' id='carousal'>
              {team.map(member =>
                <Team member={member} key={member.title1} />
              )}
            </div>
            <div className='buttons'>
              <button className='left' onClick={() => Move("left")}>&#x3c;</button>
              <button className='right' onClick={() => Move("right")}>&#x3e;</button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Parallex