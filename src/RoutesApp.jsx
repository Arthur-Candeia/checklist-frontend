import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import User from './components/User/User'
import Terms from "./components/Terms/Terms";
import NewUser from './components/NewUser/NewUser'

export default function RoutesApp() {
  const [sucessLogin, setSucessLogin] = useState(false)

  function userInfoLogin(state) {
    setSucessLogin(state)
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={(props) => <Login {...props} userInfoLogin={userInfoLogin} />}></Route>
        <Route exact path='/login' Component={(props) => <User {...props} sucessLogin={sucessLogin} />}></Route>
        <Route exact path="/terms" Component={Terms}></Route>
        <Route exact path='/newuser' Component={NewUser}></Route>
      </Routes>
    </BrowserRouter>
  )
}