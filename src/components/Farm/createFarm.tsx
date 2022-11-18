import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import FarmService from "../../services/farms/farm.service";
import { RootState } from "../../store";
import { selectFarm ,fletchFarm} from "../../store/farmReducer";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Modal,Row,Col, Form, Input } from 'antd';
type Props = {}
const CreateFarm: React.FC<Props> = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        //setLoading(true);
    }, [])
    
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    return (
        <div className="create_form">
            {loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            ) : (
            <>
            <div className="ant-col-12 create_farm_center">
                <Row>
                    <Col span={24}>
                        <Col span={22}>
                            <Form.Item
                                style={{margin:0}}
                            >
                                <h4 className="ant-form-text">Thông tin chung</h4>
                            </Form.Item>
                            
                        </Col>
                    </Col>
                    <Col span={12}>
                        <Col span={20}>
                            <Form.Item
                                style={{margin:0}}
                            >
                                <strong className="ant-form-text" style={{color:'gray',fontWeight:500}}>Tên trang trại</strong>
                            </Form.Item>
                            <Form.Item
                                name="nickname"
                                style={{marginBottom:'15px'}}
                                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Col>
                    <Col span={12}>
                        <Col span={20}>
                            <Form.Item
                                style={{margin:0}}
                            >
                                <strong className="ant-form-text" style={{color:'gray',fontWeight:500}}>Mã trang trại</strong>
                            </Form.Item>
                            <Form.Item
                                name="nickname"
                                style={{marginBottom:'15px'}}
                                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Col>
                    <Col span={12}>
                        <Col span={20}>
                            <Form.Item
                                style={{margin:0}}
                            >
                                <strong className="ant-form-text" style={{color:'gray',fontWeight:500}}>Ngày bắt đầu</strong>
                            </Form.Item>
                            <Form.Item
                                name="nickname"
                                style={{marginBottom:'15px'}}
                                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Col>
                    <Col span={12}>
                        <Col span={20}>
                            <Form.Item
                                style={{margin:0}}
                            >
                                <strong className="ant-form-text" style={{color:'gray',fontWeight:500}}>Mô hình</strong>
                            </Form.Item>
                            <Form.Item
                                name="nickname"
                                style={{marginBottom:'15px'}}
                                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Col>                    
                    <Col span={24}>
                        <Col span={22}>
                            <Form.Item
                                style={{margin:0}}
                            >
                                <strong className="ant-form-text" style={{color:'gray',fontWeight:500}}>Khu vực</strong>
                            </Form.Item>
                            <Form.Item
                                name="nickname"
                                style={{marginBottom:'15px'}}
                                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Col>
                    <Col span={24}>
                        <Col span={22}>
                            <Form.Item
                                style={{margin:0}}
                            >
                                <h4 className="ant-form-text">Chi tiết</h4>
                            </Form.Item>
                            
                        </Col>
                    </Col>
                    <Col span={12}>
                        <Col span={20}>
                            <Form.Item
                                style={{margin:0}}
                            >
                                <strong className="ant-form-text" style={{color:'gray',fontWeight:500}}>Địa chỉ</strong>
                            </Form.Item>
                            <Form.Item
                                name="nickname"
                                style={{marginBottom:'15px'}}
                                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Col>
                    <Col span={12}>
                        <Col span={20}>
                            <Form.Item
                                style={{margin:0}}
                            >
                                <strong className="ant-form-text" style={{color:'gray',fontWeight:500}}>Quy mô trại</strong>
                            </Form.Item>
                            <Form.Item
                                name="nickname"
                                style={{marginBottom:'15px'}}
                                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Col>
                    <Col span={12}>
                        <Col span={20}>
                            <Form.Item
                                style={{margin:0}}
                            >
                                <strong className="ant-form-text" style={{color:'gray',fontWeight:500}}>Người liên hệ</strong>
                            </Form.Item>
                            <Form.Item
                                name="nickname"
                                style={{marginBottom:'15px'}}
                                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Col>
                    <Col span={12}>
                        <Col span={20}>
                            <Form.Item
                                style={{margin:0}}
                            >
                                <strong className="ant-form-text" style={{color:'gray',fontWeight:500}}>Số điện thoại</strong>
                            </Form.Item>
                            <Form.Item
                                name="nickname"
                                style={{marginBottom:'15px'}}
                                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Col>
                    <Col span={12}>
                        <Col span={20}>
                            <Form.Item
                                style={{margin:0}}
                            >
                                <strong className="ant-form-text" style={{color:'gray',fontWeight:500}}>Email</strong>
                            </Form.Item>
                            <Form.Item
                                name="nickname"
                                style={{marginBottom:'15px'}}
                                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Col>
                    <Col span={12}>
                        <Col span={20}>
                            <Form.Item
                                style={{margin:0}}
                            >
                                <strong className="ant-form-text" style={{color:'gray',fontWeight:500}}>BU</strong>
                            </Form.Item>
                            <Form.Item
                                name="nickname"
                                style={{marginBottom:'15px'}}
                                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Col>
                </Row>
                
            </div>
            </>
            )}
        </div>
    );

}
export default CreateFarm;