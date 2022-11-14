import React, { useState, useRef } from 'react';
import { NavLink, Navigate, useNavigate, NavigateFunction } from 'react-router-dom';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import logo from '../../assets/images/logo_has_slogan.png';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import AuthService from "../../services/auth/auth.service";
import { Formik, Field, Form, ErrorMessage } from "formik";
type Props = {}
const SignIn: React.FC<Props> = () => {
    let navigate: NavigateFunction = useNavigate();
    const form = useRef();
    const [message, setMessage] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const dispatch = useDispatch();

    const onChangeUsername = (e:any) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e:any) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (formValue: { username: string; password: string }) => {
        
        const { username, password } = formValue;
        setLoading(true);

        AuthService.login(username, password)

    };
    const initialValues = {
        username: "nguyen.np@exceltech.vn",
        password: "123456",
    };
    return (
        <div className="auth-wrapper">
            <div className="auth-content">
                <div className="card">
                    <div className="card-body text-center">
                        <div className="mb-4">
                            <i className="feather icon-unlock auth-icon" />
                        </div>
                        <img src={logo} className="App-logo" alt="logo" />
                        <div className="auth__center__form">
                            <Formik
                                initialValues={initialValues}
                                onSubmit={handleLogin}
                            >
                                <Form>
                                <h3 className="mb-4">Đăng nhập</h3>
                                <h3 className="mb-4"> GREENFEED QUẢN LÝ NĂNG SUẤT</h3>
                                <div className="input-group mb-3">
                                    <p className="auth__label">Tên đăng nhập</p>
                                    <input type="username" className="form-control" placeholder="Email"
                                        name="username"
                                        value={username}
                                        onChange={onChangeUsername}
                                       
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <p className="auth__label">Mật khẩu</p>
                                    <input type="password" className="form-control" placeholder="password"
                                        name="password"
                                        value={password}
                                        onChange={onChangePassword}
                                
                                    />
                                    <p className="mb-2 text-muted"> <NavLink to="/auth/reset-password-1">Quên mật khẩu?</NavLink></p>
                                </div>

                                <button className="btn btn-primary shadow-2">Đăng nhập</button>

                                <p className="mb-0 text-muted">Chưa có tài khoản? <NavLink to="/auth/signup">Đăng ký</NavLink></p>
                                </Form>
                            </Formik>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default SignIn;