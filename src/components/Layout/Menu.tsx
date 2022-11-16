import React, { useState } from "react";
import classNames from "classnames";
import SimpleBar from "simplebar-react";
import Logo from "./Logo";
// import Menu from "../menu/Menu";
import Toggle from "./Toggle";

const Menu = () => {
  
  return (
    <ul className="nk-menu">

      <li className="nk-menu-item">
        <a className="nk-menu-link">
          <span className="nk-menu-icon"><em className="icon ni ni-view-col"></em></span>
          <span className="nk-menu-text">Tổng quan</span>
        </a>
      </li>

      <li className="nk-menu-item">
        <a className="nk-menu-link">
          <span className="nk-menu-icon"><em className="icon ni ni-view-col"></em></span>
          <span className="nk-menu-text">Trang trại</span>
        </a>
      </li>

      <li className="nk-menu-item">
        <a className="nk-menu-link">
          <span className="nk-menu-icon"><em className="icon ni ni-view-col"></em></span>
          <span className="nk-menu-text">Vật nuôi</span>
        </a>
      </li>

      <li className="nk-menu-item">
        <a className="nk-menu-link">
          <span className="nk-menu-icon"><em className="icon ni ni-view-col"></em></span>
          <span className="nk-menu-text">Nhà</span>
        </a>
      </li>      

    </ul>
  );
};
export default Menu;
