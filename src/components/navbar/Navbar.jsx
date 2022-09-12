import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

// import logo from "../../images/fire.jpg";
import "./navbar.css";

//! BEM -> Block Element Modifier

const Menu = () => (
  <React.Fragment>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wuiux">What is UIUX?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </React.Fragment>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ui3__navbar">
      <div className="ui3__navbar-links">
        <div className="ui3__navbar-links_logo">
          {/* <img src={logo} alt="Logo" /> */}
          <b>UI|UX</b>
        </div>
        <div className="ui3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="ui3__navbar-sign">
        <p>sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="ui3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="ui3__navbar-menu_container scale-up-center">
            <div className="ui3__navbar-menu_container-links">
              <Menu />
              <div className="ui3__navbar-menu_container-links-sign">
                <p>sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
