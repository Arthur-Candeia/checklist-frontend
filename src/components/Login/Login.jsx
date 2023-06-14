import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {AiFillEye} from 'react-icons/ai'
import { userLogin } from "../../connect/db";
import './Login.scss'

export function Login() {
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
    userLogin(user, password).then((result) =>  navigate(`/login/${JSON.stringify(result)}`))
  }

  return (
    <form autoComplete="on" method="POST" onSubmit={(ev) => forLogin(ev)}>
      <h1>CHECKLIST &#x2705;</h1>

      <div className="inputs">
        <label htmlFor="user">Usuário</label>
        <input type="text" name="user" id="user" value={user} onChange={(ev) => changeUser(ev)} required/>
      </div>

      <div className="inputs">
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" value={password} onChange={(ev) => changePassword(ev)} required />
        <span id="eye"><AiFillEye></AiFillEye></span>
      </div>

      <input type="submit" value="ENTRAR" />
      <a className="links" onClick={() => navigate('/newUser')}>Cadastre-se</a>
      <span id="terms">Ao usar Checklist você concorda com os <a className="links" onClick={() => navigate('/termos')}>Termos de Uso</a></span>
    </form>
  )
}