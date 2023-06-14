import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "./components/Login/Login";
import teste from './teste'

export default function RoutesApp() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Login}></Route>
        <Route exact path='/login/:tasks' Component={teste}></Route>
      </Routes>
    </BrowserRouter>
  )
}