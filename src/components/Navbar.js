import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Navbar = () => {
  const [burgerTl] = useState(gsap.timeline({ paused: true, duration: 0.2 }));

  useEffect(() => {
    burgerTl
      .to(
        ".burger__line--center",
        {
          opacity: 0,
        },
        0
      )
      .to(
        ".burger__line--top",
        {
          y: "0.515625rem", // 8.25px
        },
        0
      )
      .to(
        ".burger__line--bottom",
        {
          y: "-0.515625rem", // 8.25px
        },
        0
      )
      .to(
        ".burger__line--top",
        {
          rotate: 45,
          scaleX: 0.8,
        },
        0.2
      )
      .to(
        ".burger__line--bottom",
        {
          rotate: -45,
          scaleX: 0.8,
        },
        0.2
      )
      .reverse(); // eslint-disable-next-line
  }, []);

  const toggleBurgerTimeline = () => {
    if (burgerTl.reversed()) {
      burgerTl.timeScale(2).play();
    } else {
      burgerTl.timeScale(2).reverse();
    }
  };

  return (
    <header className="header">
      <nav className="container">
        <div className="row">
          <div className="col col1">
            <span className="logo">YelpCamp</span>
          </div>
          <div className="col col2 nav-links-desktop">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <Link to="/campgrounds">Campgrounds</Link>
              </li>
              <li>
                <Link to="/campgrounds/new">New Campgrounds</Link>
              </li>
            </ul>
          </div>
          <div className="col col3 burger-button">
            <button onClick={toggleBurgerTimeline} className="burger">
              <div className="burger__line burger__line--top"></div>
              <div className="burger__line burger__line--center"></div>
              <div className="burger__line burger__line--bottom"></div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
