import React, { useState } from "react";

const Menu = () => {

  return (
    <ul className="nk-menu">

      <li className="nk-menu-item">
        <a className="nk-menu-link" href="#">
          <span className="nk-menu-icon"><em className="icon ni ni-view-col"></em></span>
          <span className="nk-menu-text">Tổng quan</span>
        </a>
      </li>

      <li className="nk-menu-item">
        <a className="nk-menu-link" href="#">
          <span className="nk-menu-icon nk-menu-icon1"><em className="icon ni ni-view-col"></em></span>
          <span className="nk-menu-text">Trang trại</span>
        </a>
      </li>

      <li className="nk-menu-item">
        <a className="nk-menu-link" href="#">
          <span className="nk-menu-icon nk-menu-icon2"><em className="icon ni ni-view-col"></em></span>
          <span className="nk-menu-text">Vật nuôi</span>
        </a>
      </li>

      <li className="nk-menu-item">
        <a className="nk-menu-link" href="#">
          <span className="nk-menu-icon nk-menu-icon3"><em className="icon ni ni-view-col"></em></span>
          <span className="nk-menu-text">Nhà</span>
        </a>
      </li>      

    </ul>
  );
};
export default Menu;
