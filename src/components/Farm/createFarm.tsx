import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import FarmService from "../../services/farms/farm.service";
import { RootState } from "../../store";
import { selectFarm ,fletchFarm} from "../../store/farmReducer";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';
import { message, Upload ,Row,Col, Form, Input } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
type Props = {}
const CreateFarm: React.FC<Props> = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    useEffect(() => {
        //setLoading(true);
    }, [])
    
    const beforeUpload = (file: RcFile) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      };
    const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    )
    const getBase64 = (img: RcFile, callback: (url: string) => void) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result as string));
        reader.readAsDataURL(img);
      };
    const handleChange = (info: UploadChangeParam<UploadFile>) => {
        if (info.file.status === 'uploading') {
          setLoading(true);
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj as RcFile, url => {
            setLoading(false);
            setImageUrl(url);
          });
        }
      };
    return (
        <div className="create_form">
           
            <div className="ant-col-12 create_farm_center">
                <Row>
                    <Col span={24}>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                            >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Col>                    
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
            
            
        </div>
    );

}
export default CreateFarm;