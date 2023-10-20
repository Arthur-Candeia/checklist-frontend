import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../connect/db";
import {eyeClick} from "./functions";
import { InputPassword, InputStandart } from "../Inputs/Inputs";
import './Login.scss'

export default function Login({userInfoLogin}) {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function forLogin(ev) {
    ev.preventDefault()
    document.querySelector('.err').style.visibility = 'hidden'
    userLogin(user, password).then((result) => {
      if (!result.err) {
        sessionStorage.token = JSON.stringify(result.token)
        sessionStorage.secret = JSON.stringify(result.secret)
        sessionStorage.tasks = JSON.stringify(result.tasks)
        sessionStorage.name = JSON.stringify(result.name)
        userInfoLogin(true)
        navigate('/login')
      }
      else {
        const err = document.querySelector('.err')
        err.textContent = result.err
        err.style.visibility = 'visible'
      }
    })
  }

  return (
    <div id="login">
      <form autoComplete="on" method="POST" onSubmit={(ev) => forLogin(ev)} id="formLogin">
        <h1>CHECKLIST &#x2705;</h1>
        <InputStandart identify='user' user={user} changeUser={setUser}/>
        <InputPassword identify='password' password={password} changePassword={setPassword} eyeClick={eyeClick}/>

        <input type="submit" value="ENTRAR" />
        <a className="links" onClick={() => navigate('/newuser')}>Cadastre-se</a>
        <span id="terms">Ao usar Checklist você concorda com os <a className="links" onClick={() => navigate('/terms')}>Termos de Uso</a></span>
      </form>
    </div>
  )
}