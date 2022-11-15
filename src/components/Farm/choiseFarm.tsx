import React, { useState, useRef } from 'react';
import logo from '../../assets/images/logo.png';
type Props = {}
const ChoiseFarm: React.FC<Props> = () => {
    return (
        <div className="choose-wrapper">
            <div className ="choose-content">
                <div className="card-body text-center">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3>GREENFEED QUẢN LÝ NĂNG SUẤT</h3>
                    <p>Vui lòng chọn 1 trang trại để bắt đầu... Bạn có thể thay đổi trang trại sau ở mục thông tin tài khoản</p>
                </div>
            </div>
        </div>
    );

}

export default ChoiseFarm;