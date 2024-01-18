import { TypeAnimation } from 'react-type-animation';
import React,{useState,useEffect} from "react";
import './parallex.scss';
import Team from '../Cards/team';
import sir from '../img&vid/Subhashis_sir.jpg'
import Head from '../Cards/heading';
import Card from "../Cards/Card";
import pdf1 from '../pdfs/pdf1.pdf'
import pdf2 from '../pdfs/pdf2.pdf'
import pdf3 from '../pdfs/pdf3.pdf'
import Image from '../img&vid/Image.jpg'
import Image2 from '../img&vid/Image2.jpg'
import Image3 from '../img&vid/Image3.jpg';
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../../Config/firebase';
import LoadingScreen from '../layout/loading';

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

function Parallex() {

  const team2= collection(db,"Team")
  const [teamlist, setteamlist] = useState(team)
  const [isloaded, setisloaded] = useState(true)
  const getTeam = async ()=>{
    setisloaded(false);
    try{
      const data = await getDocs(team2)
      const filteredData = data.docs.map((doc)=>({
      ...doc.data(),
      id:doc.id,
    }))
    const sorted = [...filteredData].sort((a,b)=>a.priority-b.priority);
    setteamlist(sorted.length===0?team:sorted);
    setisloaded(true);
    } catch(error){
      console.log(error);
      setteamlist(team);
      setisloaded(true);
    }
  }
  useEffect(()=>{
    getTeam();
  },[]);


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
    {isloaded ? <div>
      <section id="wrapper" className='Parallax'>
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
          <section className='Events'>
            {Events.map(event => (
              <Card key={event.t} imgsrc={event.imgsrc} t={event.t} abt={event.abt} elink={event.elink} line={event.line} />
            ))}
          </section>
        </section>

        <section className='scroll'>
          <Head title={"Code Squad"} />
          <div className='team-wrapper'>
            <div className='team' id='carousal'>
              {teamlist.map((member,) =>
                <Team member={member} key={member.title1} />
              )}
            </div>
            <div className='buttons'>
              <button className='left' onClick={() => Move("left")}>&larr;</button>
              <button className='right' onClick={() => Move("right")}>&rarr;</button>
            </div>
          </div>
        </section>
      </section>
      <script src='/parallax.js'></script>
    </div>:<LoadingScreen />}
    </>
  );
}

export default Parallex