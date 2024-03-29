import Annoucement from "../Components/Cards/Announcement";
import computex2 from "../Components/img&vid/Computex2.jpg";
import fresher from "../Components/img&vid/Freshers.jpg";
import alumni from "../Components/img&vid/Alumni.jpg";
import code from "../Components/img&vid/Code.jpg";
import Head from "../Components/Cards/heading";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../Config/firebase";
import { useEffect, useState } from "react";
import LoadingScreen from "../Components/layout/loading";
import './News.scss';
const News = () => {
  const news = [
    {
      title: "COMPUTEX CUP 2.0",
      subtitle: "Battle of Coders against Time and Testcases",
      date: " July 8, 2023",
      author: "Pursottam Shah",
      post: "President of NSCC",
      img: computex2,
    },
    {
      title: "FRESHER INTRODUCTION",
      subtitle:
        "Experiencing yolks which came out of an egg and their Expectations",
      date: " March 31, 2023",
      author: "Pursottam Shah",
      post: "President of NSCC",
      img: fresher,
    },
    {
      title: "MEET WITH ALUMNI",
      subtitle: "What it takes to be in Amazon",
      date: " November 15, 2022",
      author: "Pursottam Shah",
      post: "President of NSCC",
      img: alumni,
    },
    {
      title: "COMPUTEX CUP",
      subtitle:
        "When the top coders of insitute collide then who owns the code lets see...",
      date: " October 18, 2022",
      author: "Pursottam Shah",
      post: "President of NSCC",
    },
    {
      title: "CODING CONTEST",
      subtitle: " The first contest of our coding club",
      date: " September 12, 2022",
      author: "Pursottam Shah",
      post: "President of NSCC",
      img: code,
    },
    {
      title: "GITHUB SESSION",
      subtitle: "What is a git or github, are they even different??",
      date: " August 29, 2022",
      author: "Pursottam Shah",
      post: "President of NSCC",
    },
  ];
  const [NewsList, setNewsList] = useState(news);
  const [loading, setloading] = useState(false);
  const News = collection(db, "News");
  const getNews = async () => {
    setloading(true)
    try {
      const data = await getDocs(News);
      const filtered = data.docs.map((docs) => ({
        ...docs.data(),
        id: docs.id,
      }));
      const sorted = [...filtered].sort((a,b)=>b.date-a.date)
      setNewsList(filtered.length===0?news:sorted);
    } catch (error) {
      setNewsList(news);
      console.error(error);
    } finally{
      setloading(false)
    }
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <section className="wrapper1">
            <div className="container">
              <h1 id="newsTitle">ANNOUNCEMENTS</h1>
              <div className="row">
                {NewsList.map((eve) => {
                  return <Annoucement {...eve} key={eve.title} />;
                })}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default News;
