import React from "react";
import './About.css';
import Workshop from '../img&vid/Workshop.jpg';
import Event from '../img&vid/Events.jpg';
import Innovate from '../img&vid/Innovate.jpg';
function About() {
  return(
    <>
    <div className="abcd">
      <h1 className="text-center text-secondary fw-boldest display-2">
        About Us
      </h1>
      <hr className="style7" />
    </div>
    <div className="contain">
      <div className="container" style={{marginTop: '100px'}}>
        <div className="row-md-2">
          <div className="col-md-3">
            <div className="card-sl">
              <div className="card-image">
                <img src={Workshop}   width={250} height={230} />
              </div>
              <div className="abc">
                <div className="card-heading display-6 text-center">
                  WorkShops
                </div>
                <hr className="style7" />
              </div>
              <div className="bcd">
                <div className="card-text text-center">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias nihil cupiditate officiis veritatis dolor quae, natus sit ipsum ratione quasi!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque architecto voluptas quas et expedita facere libero! Eos aut quis harum.
                </div>
              </div>
              <a href="#" className="card-button bg-info"> Read more</a>
            </div>
          </div>
        </div>  
        <div className="container1">
          <div className="row-md-2">
            <div className="col-md-3">
              <div className="card-sl">
                <div className="card-image">
                  <img src={Innovate} width={250} height={230} />
                </div>
                <div className="abc">
                  <div className="card-heading display-6 text-center">
                    InnoVate
                  </div>
                  <hr className="style7" />
                </div>
                <div className="bcd">
                  <div className="card-text text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias nihil cupiditate officiis veritatis dolor quae, natus sit ipsum ratione quasi!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quod quas cupiditate vel nam delectus aspernatur expedita distinctio fugit nihil.
                  </div>
                </div>
                <a href="#" className="card-button bg-info"> Read more</a>
              </div>
            </div>
          </div>  
          <div className="container2" style={{marginTop: '100px'}}>
            <div className="row-md-2">
              <div className="col-md-3">
                <div className="card-sl">
                  <div className="card-image">
                    <img src={Event} width={250} height={210} />
                  </div>
                  <div className="abc">
                    <div className="card-heading display-6 text-center">
                      EvenTs
                    </div>
                    <hr className="style7" />
                  </div>
                  <div className="bcd">
                    <div className="card-text text-center">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias nihil cupiditate officiis veritatis dolor quae, natus sit ipsum ratione quasi!
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id eos tempora error placeat sapiente eligendi aspernatur. Reiciendis, neque 
                    </div>
                  </div>
                  <a href="#" className="card-button bg-info"> Read more</a>
                </div>
              </div>
            </div>  
          </div>
        </div></div></div>
    </>

  )
}
export default About;