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
        setLoading(true);
        async function fetchMyAPI() {
            let response = await FarmService.getFarmInfo(farms.id);
            setFarm(response.results)
            setLoading(false);
        }
        fetchMyAPI()
    }, [])

    return (
        <div className="farm__profile">
            {loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <>
                    <div className="farm__profile">
                        <div className='farm__profile__info'>
                            <Row>
                                <Col lg={24} xs={24}>
                                    <Row>
                                        <Col lg={12} xs={12}>
                                            <h4>Thông tin chi tiết</h4>
                                        </Col>
                                        <Col lg={12} xs={12}>
                                            <p>Cập nhật ngày</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={24} xs={24}>
                                    <Row>
                                        <Col lg={12} xs={12}>
                                            <h4>Thông tin chi tiết</h4>
                                        </Col>
                                        <Col lg={12} xs={12}>
                                            <p>Cập nhật ngày</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </>

            )}
        </div>
    );

}
export default FarmInfo;