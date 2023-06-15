import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { userLogin } from "../../connect/db";
import {eyeClick} from "./functions";
import './Login.scss'

export function Login({userInfo}) {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function changeUser(ev) {
    setUser(ev.target.value)
  }

  function changePassword(ev) {
    setPassword(ev.target.value)
  }

  function forLogin(ev) {
    ev.preventDefault()
    document.querySelector('.err').style.visibility = 'hidden'
    userLogin(user, password).then((result) => {
      if (!result.err) {
        sessionStorage.user = user
        sessionStorage.password = password
        userInfo(result)
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
    <form autoComplete="on" method="POST" onSubmit={(ev) => forLogin(ev)}>
      <h1>CHECKLIST &#x2705;</h1>

      <div className="inputs">
        <label htmlFor="user">Usuário</label>
        <input type="text" name="user" id="user" value={user} onChange={(ev) => changeUser(ev)} required/>
      </div>

      <div className="inputs seeError">
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" value={password} onChange={(ev) => changePassword(ev)} required />
        <span className="eye visible" onClick={eyeClick}><AiOutlineEye /></span>
        <span className="eye invisible" onClick={eyeClick} style={{display: 'none'}}><AiOutlineEyeInvisible /></span>
        <span className="err">.</span>
      </div>

      <input type="submit" value="ENTRAR" />
      <a className="links" onClick={() => navigate('/newUser')}>Cadastre-se</a>
      <span id="terms">Ao usar Checklist você concorda com os <a className="links" onClick={() => navigate('/termos')}>Termos de Uso</a></span>
    </form>
  )
}