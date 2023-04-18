import React from "react";
import './Announcement.css';
import Head from "./heading";
function Annoucement() {
 return (
   <div>
     <section className="wrapper1">
       <div className="container">
        <Head title={"Announcements"} />
         {/* <div className="row">
           <div className="col text-center mb-5">
             <div id="toptext"className="display-4">ANNOUNCEMENTS</div> 
           </div>
         </div> */}
         <div className="row">
           <div className="col-sm-9 col-md-6 col-lg-4 mb-4"><div className="card text-white card-has-bg click-col" style={{backgroundImage: 'url("https://source.unsplash.com/600x900/?tech,street")'}}>
               <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="Goverment" />
               <div className="card-img-overlay d-flex flex-column">
                 <div className="card-body">
                   <small className="card-meta mb-2">FRESHERS INTRODUCTION</small>
                   <h4 className="card-title mt-0 "><a className="text-white" id="text" herf="#">Exploring yolks who came out of an egg and their expectations</a></h4>
                   <small><i className="far fa-clock" /> March 31, 2023</small>
                 </div>
                 <div className="card-footer">
                   <div className="media">
                     {/* <img className="mr-3 rounded-circle" src="background.png" alt="Generic" style={{maxWidth: '50px'}} /> */}
                     <div className="media-body">
                       <h6 className="my-0 text-white d-block">Purushottam</h6>
                       <small>President of NSCC</small>
                     </div>
                   </div>
                 </div>
               </div>
             </div></div>
           <div className="col-sm-12 col-md-6 col-lg-4 mb-4"><div className="card text-white card-has-bg click-col" style={{backgroundImage: 'url("https://source.unsplash.com/600x900/?tree,nature")'}}>
               <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tree,nature" alt="Goverment" />
               <div className="card-img-overlay d-flex flex-column">
                 <div className="card-body">
                   <small className="card-meta mb-2">MEET WITH ALUMNI</small>
                   <h4 className="card-title mt-0 "><a className="text-white" id="text" herf="#">Cultivating one's career with some insightful talks with XYZ</a></h4>
                   <small><i className="far fa-clock" /> March 8, 2023</small>
                 </div>
                 <div className="card-footer">
                   <div className="media">
                     {/* <img className="mr-3 rounded-circle" src="background.png" alt="Generic" style={{maxWidth: '50px'}} /> */}
                     <div className="media-body">
                       <h6 className="my-0 text-white d-block">Purushottam</h6>
                       <small>President of NSCC</small>
                     </div>
                   </div>
                 </div>
               </div>
             </div></div>
           <div className="col-sm-12 col-md-6 col-lg-4 mb-4"><div className="card text-white card-has-bg click-col" style={{backgroundImage: 'url("https://source.unsplash.com/600x900/?computer,design")'}}>
               <img className="card-img d-none" src="https://source.unsplash.com/600x900/?computer,design" alt="Goverment" />
               <div className="card-img-overlay d-flex flex-column">
                 <div className="card-body">
                   <small className="card-meta mb-2">MEET WITH ALUMNI</small>
                   <h4 className="card-title mt-0 "><a className="text-white" id="text" herf="#">What it takes to be in Amazon?</a></h4>
                   <small><i className="far fa-clock" /> November 15, 2022</small>
                 </div>
                 <div className="card-footer">
                   <div className="media">
                     {/* <img className="mr-3 rounded-circle" src="background.png" alt="Generic" style={{maxWidth: '50px'}} /> */}
                     <div className="media-body">
                       <h6 className="my-0 text-white d-block">Purushottam</h6>
                       <small>President of NSCC</small>
                     </div>
                   </div>
                 </div>
               </div>
             </div></div>
           <div className="col-sm-12 col-md-6 col-lg-4 mb-4"><div className="card text-white card-has-bg click-col" style={{backgroundImage: 'url("https://source.unsplash.com/600x900/?tech,street")'}}>
               <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="Goverment" />
               <div className="card-img-overlay d-flex flex-column">
                 <div className="card-body">
                   <small className="card-meta mb-2">COMPUTEX CUP</small>
                   <h4 className="card-title mt-0 "><a className="text-white" id="text" herf="#">When the top coders of insitute collide then who owns the code lets see...</a></h4>
                   <small><i className="far fa-clock" /> October 18, 2022</small>
                 </div>
                 <div className="card-footer">
                   <div className="media">
                     {/* <img className="mr-3 rounded-circle" src="background.png" alt="Generic" style={{maxWidth: '50px'}} /> */}
                     <div className="media-body">
                       <h6 className="my-0 text-white d-block">Purushottam</h6>
                       <small>President of NSCC</small>
                     </div>
                   </div>
                 </div>
               </div>
             </div></div>
           <div className="col-sm-12 col-md-6 col-lg-4 mb-4"><div className="card text-white card-has-bg click-col" style={{backgroundImage: 'url("https://source.unsplash.com/600x900/?tree,nature")'}}>
               <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tree,nature" alt="Goverment" />
               <div className="card-img-overlay d-flex flex-column">
                 <div className="card-body">
                   <small className="card-meta mb-2">Coding Contest</small>
                   <h4 className="card-title mt-0 "><a className="text-white" id="text" herf="#"> The first contest of our coding club</a></h4>
                   <small><i className="far fa-clock" /> September 12, 2022</small>
                 </div>
                 <div className="card-footer">
                   <div className="media">
                     {/* <img className="mr-3 rounded-circle" src="background.png" alt="Generic" style={{maxWidth: '50px'}} /> */}
                     <div className="media-body">
                       <h6 className="my-0 text-white d-block">Purushottam</h6>
                       <small>President of NSCC</small>
                     </div>
                   </div>
                 </div>
               </div>
             </div></div>
           <div className="col-sm-12 col-md-6 col-lg-4 mb-4"><div className="card text-white card-has-bg click-col" style={{backgroundImage: 'url("https://source.unsplash.com/600x900/?computer,design")'}}>
               {/* <img className="card-img d-none" src alt="Goverment" /> */}
               <div className="card-img-overlay d-flex flex-column">
                 <div className="card-body">
                   <small className="card-meta mb-2">GIT/GITHUB SESSION</small>
                   <h4 className="card-title mt-0 "><a className="text-white" id="text" herf="#">What is a git or github, are they even different??</a></h4>
                   <small><i className="far fa-clock" /> August 29, 2022</small>
                 </div>
                 <div className="card-footer">
                   <div className="media">
                     {/* <img className="mr-3 rounded-circle" src="background.png" alt="Generic" style={{maxWidth: '50px'}} /> */}
                     <div className="media-body">
                       <h6 className="my-0 text-white d-block">Purushottam</h6>
                       <small>President of NSCC</small>
                     </div>
                   </div>
                 </div>
               </div>
             </div></div>
         </div>
       </div>
     </section>
   </div>
 );
}
export default Annoucement;