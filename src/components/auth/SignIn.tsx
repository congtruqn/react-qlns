import React from 'react';
import {NavLink} from 'react-router-dom';

// import './../../../assets/scss/style.scss';
import logo from '../../assets/images/logo_has_slogan.png';
class SignIn extends React.Component {
    render () {
        return(
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="card">
                                <div className="card-body text-center">
                                    <div className="mb-4">
                                        <i className="feather icon-unlock auth-icon"/>
                                    </div>
                                    <img src={logo} className="App-logo" alt="logo" />
                                    <div className="auth__center__form">
                                        <h3 className="mb-4">Đăng nhập</h3>
                                        <h3 className="mb-4"> GREENFEED QUẢN LÝ NĂNG SUẤT</h3>
                                        <div className="input-group mb-3">
                                            <p className="auth__label">Tên đăng nhập</p>
                                            <input type="email" className="form-control" placeholder="Email"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <p className="auth__label">Mật khẩu</p>
                                            <input type="password" className="form-control" placeholder="password"/>
                                            <p className="mb-2 text-muted"> <NavLink to="/auth/reset-password-1">Quên mật khẩu?</NavLink></p>
                                        </div>
                                        
                                        <button className="btn btn-primary shadow-2">Đăng nhập</button>
                                        
                                        <p className="mb-0 text-muted">Chưa có tài khoản? <NavLink to="/auth/signup">Đăng ký</NavLink></p>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
        );
    }
}

export default SignIn;