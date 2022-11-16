import React, { useState, useRef } from 'react';
import Sidebar from "./SideBar";
import classNames from "classnames";
type Props = {}
const Dashboard: React.FC<Props> = () => {
    const [mobileView, setMobileView] = useState();
    const [visibility, setVisibility] = useState(false);
    const [themeState] = useState({
        main: "default",
        sidebar: "dark",
        header: "white",
        skin: "light",
    });
    const sidebarClass = classNames({
        "nk-sidebar-mobile": mobileView,
        "nk-sidebar-active": visibility && mobileView,
    });
    const toggleSidebar = (e) => {
        e.preventDefault();
        if (visibility === false) {
          setVisibility(true);
        } else {
          setVisibility(false);
        }
      };
    return (
        <div className="nk-main">
          <Sidebar
            sidebarToggle={toggleSidebar}
            fixed
            mobileView={mobileView}
            theme={themeState.sidebar}
            className={sidebarClass}
          />
          <div className='nk-wrap'>
            
          </div>
        </div>
    );

}

export default Dashboard;