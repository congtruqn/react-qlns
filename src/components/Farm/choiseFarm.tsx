import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import FarmService from "../../services/farms/farm.service";
import { fetchFarms } from "../../store/farms/farmActions"

import { useDispatch } from 'react-redux'
type Props = {}
const ChoiseFarm: React.FC<Props> = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const [farms, setFarms] = useState([]);
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await FarmService.listFarms();
            setFarms(response.results)
            setLoading(false);
            console.log(farms)
        }
        fetchMyAPI()
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [])
    
    return (
        <div className="choose-wrapper">
            {loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <><div className="choose-content">
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
                                { farms.map(item => (
                                   <tr className='unread' key={item.id}>
                                    <td className='td'>
                                        <h6 className='"mb-1'>{item.name}</h6>
                                    </td>
                                    <td className='td'>
                                        Kín
                                    </td>
                                    <td className='td'>
                                        <i className="fas fa-map-marker-alt"></i>{item.address}
                                    </td>
                                    <td className='td'>
                                        SL Vật nuôi : 412
                                    </td>
                                    </tr>
                                ))} 
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
                </div></>

            )}
        </div>
    );

}
export default ChoiseFarm;