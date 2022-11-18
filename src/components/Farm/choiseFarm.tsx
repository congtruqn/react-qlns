import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import FarmService from "../../services/farms/farm.service";
import { RootState } from "../../store";
import { selectFarm ,fletchFarm} from "../../store/farmReducer";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Modal } from 'antd';
import CreateFarm from "../../components/Farm/createFarm"
type Props = {}
const ChoiseFarm: React.FC<Props> = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [farms, setFarms] = useState([]);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setLoading(true);
        async function fetchMyAPI() {
            let response = await FarmService.listFarms();
            setFarms(response.results)
            dispatch(fletchFarm(response.results));
            setLoading(false);
            
        }
        fetchMyAPI()
    }, [])
    
    function handleChange(incrementAmountValue: any) {
        dispatch(selectFarm(incrementAmountValue));
        navigate('/')
    }

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
                                   <tr className='unread' key={item.id} onClick={() => handleChange(item)}>
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
                                    <Link to={'#'} onClick={() => setOpen(true)}>+Thêm trại chăn nuôi</Link>
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

                <Modal
                    title="Tạo Trang Trại"
                    centered
                    width={'100vh'}
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    cancelText="Hủy"
                    okText="Thêm"
                    wrapClassName="add__farm__modal"
                >
                    <CreateFarm></CreateFarm>
              </Modal>

                </>

            )}
        </div>
    );

}
export default ChoiseFarm;