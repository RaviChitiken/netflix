import React from "react";
import "./styles.css";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgSrc} alt="myPic" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.seriesName}</h3>
            <a href={props.link}>
              <button className="btnWatchNow"> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;