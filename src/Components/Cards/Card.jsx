import React from "react";
import "./card.scss";

export default function Card(props) {
  return (
      <div class="card-hover">
        <div class="card-hover__content">
          <h3 class="card-hover__title">
            {props.t}
          </h3>
          <p class="card-hover__text">
            {props.abt}
          </p>
          <a href={props.elink} class="card-hover__link">
            <span>See Questions</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
        <img
          src={props.imgsrc}
          alt=""
        />
      </div>
  );
}
