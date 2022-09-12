import React from "react";
import "./header.css";
import people from "../../images/people.png";
import ai from "../../images/newai.png";

function Header() {
  return (
    <div className="ui__header section__padding" id="home">
      <div className="ui__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with Priyanshu .
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam earum
          nisi necessitatibus officiis quaerat sint sapiente porro esse fuga
          ipsa dolores itaque quibusdam, numquam dolorum facilis, repellat
          facere. Ea, sed.
        </p>
        <div className="ui__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="ui__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="ui__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
