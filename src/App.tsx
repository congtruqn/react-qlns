import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom'
import './assets/scss/style.scss'
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import PrivateRoute from "./routes/protected";

class App extends Component {
  render() {
    return (
        <Routes>
          <Route path={`/signup`} element={<SignUp />}></Route>
          <Route path={`/`} element={<PrivateRoute />}>
            <Route path={`/login`} element={<SignIn />}></Route>
            <Route path={`/login1`} element={<SignIn />}></Route>
          </Route>
        </Routes>
    );
  }
}
export default App;
