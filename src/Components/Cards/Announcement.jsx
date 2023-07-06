import React from "react";
import './Announcement.scss';
function Annoucement({title,subtitle,date,author,post,img}) {
  return (
    <div className="col-sm-9 col-md-6 col-lg-4 mb-4">
      <div className="card text-white card-has-bg click-col" style={{ backgroundImage: `url(${img})` }}>
        <img className="card-img d-none" src={img} alt="Goverment" />
        <div className="card-img-overlay d-flex flex-column">
          <div className="card-body">
            <big className="card-meta mb-3">
              {title}
            </big>
            <h6 className="card-title mt-0 ">
              <span className="text-white" id="text">
                {subtitle}
              </span>
            </h6>
            <br />
            <small>
              <i className="far fa-clock" />
              {date}
            </small>
          </div>
          <div className="card-footer">
            <div className="media">
              <div className="media-body">
                <h6 className="my-0 text-white d-block">{author}</h6>
                <small>{post}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Annoucement;
