import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiXCircle } from "react-icons/fi";
import { RiGameFill } from "react-icons/ri";

import { Header } from "./styles";

const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <Header>
      <header className="header__middle">
        <div className="container">
          <div className="row">
            {/* Add Logo  */}
            <div className="header__middle__logo">
              <NavLink exact activeClassName="is-active" to="/">
                <RiGameFill className="icon-menu" />
              </NavLink>
            </div>

            <div className="header__middle__menus">
              <nav className="main-nav ">
                {/* Responsive Menu Button */}
                {isResponsiveclose === true ? (
                  <>
                    <span
                      className="menubar__button"
                      style={{ display: "none" }}
                      onClick={toggleClass}
                    >
                      {" "}
                      <FiXCircle />{" "}
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      className="menubar__button"
                      style={{ display: "none" }}
                      onClick={toggleClass}
                    >
                      {" "}
                      <FiMenu />{" "}
                    </span>
                  </>
                )}

                <ul className={boxClass.join(" ")}>
                  <li className="menu-item">
                    <NavLink
                      exact
                      activeClassName="is-active"
                      onClick={toggleClass}
                      to="/"
                    >
                      {" "}
                      Home{" "}
                    </NavLink>
                  </li>

                  <li className="menu-item ">
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to="topfilmes"
                    >
                      {" "}
                      filmes{" "}
                    </NavLink>{" "}
                  </li>
                  <li className="menu-item ">
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to="topjogos"
                    >
                      {" "}
                      jogos{" "}
                    </NavLink>{" "}
                  </li>

                  <li className="menu-item ">
                    <NavLink
                      onClick={toggleClass}
                      activeClassName="is-active"
                      to="topseries"
                    >
                      {" "}
                      series{" "}
                    </NavLink>{" "}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Header>
  );
};

export default Navbarmenu;
