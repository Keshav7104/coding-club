import React from "react";
import './Announcement.scss';

function Announcement({ title, subtitle, date, author, post, img }) {
  const formattedDate = date && date.toDate
    ? date.toDate().toLocaleDateString()
    : "01/01/2023";

  return (
    <a href={(img!==null) ?img:"#"} target="blank" className="col-sm-9 col-md-6 col-lg-4 mb-4">
      <div className="card text-white card-has-bg click-col" style={{ backgroundImage: `url(${img})` }}>
        <img className="card-img d-none" src={img} alt="Government" />
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
              {formattedDate}
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
    </a>
  );
}

export default Announcement;
