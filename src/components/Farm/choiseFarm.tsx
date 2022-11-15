import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

type Props = {}
const ChoiseFarm: React.FC<Props> = () => {
    useEffect(() => {
        console.log('a')
    }, [])
    return (
        <div className="choose-wrapper">
            <div className ="choose-content">
                <div className="card-body text-center">
                    <div className='choose__logo'>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className='choose__center'>
                        <h3 className='choose__title'>GREENFEED QUẢN LÝ NĂNG SUẤT</h3>
                        <p>Vui lòng chọn 1 trang trại để bắt đầu... Bạn có thể thay đổi trang trại sau ở mục thông tin tài khoản</p>
                    </div>
                    <div className='table-responsive'>
                        <table className='table table-hover'>
                            <tbody>
                                <tr className='unread'>
                                    <td className='td'>
                                        <h6 className='"mb-1'>Trại Cư Jut</h6>
                                    </td>
                                    <td className='td'>
                                        Kín
                                    </td>
                                    <td className='td'>
                                        <i className="fas fa-map-marker-alt"></i>Cư Jut, Dăk Nông
                                    </td>
                                    <td className='td'>
                                        SL Vật nuôi : 412
                                    </td>
                                </tr>
                                <tr className='unread'>
                                    <td className='td'>
                                        <h6 className='"mb-1'>Trại Cư Jut</h6>
                                    </td>
                                    <td className='td'>
                                        Kín
                                    </td>
                                    <td className='td'>
                                        <i className="fas fa-map-marker-alt"></i>Cư Jut, Dăk Nông
                                    </td>
                                    <td className='td'>
                                        SL Vật nuôi : 412
                                    </td>
                                </tr>   
                                <tr className='unread'>
                                    <td className='td'>
                                        <h6 className='"mb-1'>Trại Cư Jut</h6>
                                    </td>
                                    <td className='td'>
                                        Kín
                                    </td>
                                    <td className='td'>
                                        <i className="fas fa-map-marker-alt"></i>Cư Jut, Dăk Nông
                                    </td>
                                    <td className='td'>
                                        SL Vật nuôi : 412
                                    </td>
                                </tr>           
                            </tbody>
                        </table>
                        <div>
                            <div className='add__farm'>
                                <Link to={'#'}>+Thêm trại chăm nuôi</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <div>
                        <p>Điều khoản sử dụng và bảo mật</p>
                        <p>Phiên bản 12.0.1 - Bản quyên thuộc về <strong>GREENFEED VIETNAM</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ChoiseFarm;