import React from "react";
import classNames from "classnames";
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

//import Toggle from "../sidebar/Toggle";
//import Logo from "../logo/Logo";
//import News from "../news/News";
//import User from "./dropdown/user/User";
const items: MenuProps['items'] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

const Header = ({ fixed, theme, className = null, setVisibility, ...props }) => {
  const headerClass = classNames({
    "nk-header": true,
    "nk-header-fixed": fixed,
    [`is-light`]: theme === "white",
    [`is-${theme}`]: theme !== "white" && theme !== "light",
    [`${className}`]: className,
  });
  return (
    <div className={headerClass}>
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-menu-trigger d-xl-none ml-n1">
   
          </div>
          <div className="nk-header-brand d-xl-none">
           
          </div>
          <div className="nk-header-news d-none d-xl-block">
            
          </div>
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className="user-dropdown"  onClick={() => setVisibility(false)}>
                <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={e => e.preventDefault()}>
                    <Space>
                        Click me
                        <DownOutlined />
                    </Space>
                    </a>
                </Dropdown>
              </li>
              <li className="notification-dropdown mr-n1"  onClick={() => setVisibility(false)}>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
