import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom'
import './assets/scss/style.scss'
import SignIn from "./components/auth/SignIn";

class App extends Component {
  render() {
    return (
      <>
      <Routes>
         <Route path={`/login`} element={<SignIn />}></Route>
      </Routes>
      </>
    );
  }

}

export default App;
