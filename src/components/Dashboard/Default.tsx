import React, { useState, useRef } from 'react';
import { NavLink, Navigate, useNavigate, NavigateFunction } from 'react-router-dom';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useTypedSelector } from '../../hooks/useTypeSelector';
import Form from "react-validation/build/form";
import AuthService from "../../services/auth/auth";
type Props = {}
const SignIn: React.FC<Props> = () => {
    return (
        <div className="auth-wrapper">

        </div>
    );

}

export default SignIn;