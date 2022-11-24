import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import FarmService from "../../services/farms/farm.service";
import { RootState } from "../../store";
import { chooseFarm, fletchFarm } from "../../store/farmReducer";
import { useSelector, useDispatch } from "react-redux";
import { message, Upload, Row, Col, Form, Input, Modal, DatePicker } from 'antd';
import { ContainerOutlined, AimOutlined, BarChartOutlined, PartitionOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import CreateFarm from "./createFarm"
type Props = {}
const FarmInfo: React.FC<Props> = () => {
    const farms = useSelector((state: RootState) => state.farm.selectFarm);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [farm, setFarm] = useState({});
    const [open, setOpen] = useState(false);
    useEffect(() => {
     
        async function fetchMyAPI() {
            let response = await FarmService.getFarmInfo(farms.id);
            setFarm(response.results)
         
        }
        fetchMyAPI()
    }, [])

    return (
        <div className="farm__profile_">
            <div className='farm__profile__info'>
                <Row>
                    <Col lg={24} xs={24}>
                        <Row>
                            <Col lg={12} xs={12}>
                                <h4 className='title'>Thông tin chi tiết</h4>
                            </Col>
                            <Col lg={12} xs={12} style={{ textAlign: 'right' }}>
                                <p>Cập nhật ngày 12/12/2021</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={24} xs={24}>
                        <Row>
                            <Col lg={6} xs={12}>
                                <p>Địa chỉ</p>
                                <h4>Thôn KronPak, Cư Jut, Đắk Nông</h4>
                            </Col>
                            <Col lg={6} xs={12}>
                                <p>Quy mô trại</p>
                                <h4>1000ha</h4>
                            </Col>
                            <Col lg={12} xs={12}>
                                <p>Ngày kết thúc</p>
                                <h4>15/08/2020</h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={24} xs={24}>
                        <Row>
                            <Col lg={6} xs={12}>
                                <p>Người liên hệ</p>
                                <h4>Thôn KronPak, Cư Jut, Đắk Nông</h4>
                            </Col>
                            <Col lg={6} xs={12}>
                                <p>Điện thoại</p>
                                <h4>1000ha</h4>
                            </Col>
                            <Col lg={12} xs={12}>
                                <p>Email</p>
                                <h4>15/08/2020</h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={24} xs={24}>
                        <Row>
                            <Col lg={6} xs={12}>
                                <p>BU</p>
                                <h4>Đông Nam Bộ</h4>
                            </Col>
                            <Col lg={6} xs={12}>
                                <p>Nhóm</p>
                                <h4>Giống lai Yorkshire x Landrace</h4>
                            </Col>
                            <Col lg={12} xs={12}>
                                <p>Người tác nghiệp</p>
                                <h4></h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={24} xs={24}>
                        <Row>
                            <Col lg={24} xs={24}>
                                <p>Ghi chú</p>
                                <h4>Giống lai Yorkshire x Landrace</h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

        </div>
    );

}
export default FarmInfo;