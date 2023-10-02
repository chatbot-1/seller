import React from "react";
import "./hero.css";
import toyota from "../../assets/toyota.jpg";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Hero = (props) => {
  return (
    <>
      <div className="home container">
        <div className="home-container">
          <div className="home-content">
            <div className="home-img">
              <img src={props.img} alt="" />
            </div>
            <div className="home-head">
              <p>{props.name}</p>
              <p className="year">{props.year}</p>
            </div>
            <div className="home-text">
              <div className="home-data">
                <i class="fa-solid fa-user-group"></i>
                <p>{props.people} People</p>
              </div>
              <div className="home-data">
                <i class="fa-solid fa-gas-pump"></i>
                <p>{props.fuel}</p>
              </div>
            </div>
            <div className="home-text">
              <div className="home-data">
                <i class="fa-solid fa-gauge"></i>
                <p>{props.speed}km/1-litre</p>
              </div>
              <div className="home-data">
                <i class="fa-solid fa-bolt"></i>
                <p>{props.type}</p>
              </div>
            </div>
            <hr />
            <div className="home-bottom">
              <div className="home-price">
                <p>
                  ${props.emi} <span>/month</span>
                </p>
              </div>
              <div className="home-like">
                <i class="fa-regular fa-heart"></i>
                <p className="home-btn">Rent now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hero;
