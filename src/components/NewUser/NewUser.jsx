import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newUserSave } from "../../connect/db";
import {eyeClick} from "../Login/functions";
import ButtonHome from "../Terms/ButtonHome";
import { InputPassword, InputStandart } from "../Inputs/Inputs";
import './newUser.scss';

export default function NewUser() {
  const [newUser, setNewUser] = useState('')
  const [newPassword, setnNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  function forCreateUser(ev) {
    ev.preventDefault()
    document.querySelector('.err').style.visibility = 'hidden'

    if (newPassword != confirmPassword) {
      const err = document.querySelector('.err')
      err.textContent = 'As senhas não conferem'
      err.style.visibility = 'visible'
      return 1;
    }

    newUserSave(newUser, newPassword).then((result) => {
      if (!result.err) {
        setNewUser('')
        setnNewPassword('')
        setConfirmPassword('')

        let div = document.createElement('div')
        let span = document.createElement('span')
        span.id = 'progress'

        div.innerText = 'Usuário cadastrado com sucesso!!!'
        div.id = 'sucessCreateUser'
        div.appendChild(span)
        document.getElementById('newUserContainer').appendChild(div)
        setTimeout(() => {
          navigate('/')
        }, 5500)
      }
      else {
        const err = document.querySelector('.err')
        err.textContent = result.err
        err.style.visibility = 'visible'
      }
    })
  }

  return (
    <div id="newUserContainer">
      <form autoComplete="on" method="POST" onSubmit={(ev) => forCreateUser(ev)} id="formNewUser">
        <h1>CHECKLIST &#x2705;</h1>
        <InputStandart identify='newUser' user={newUser} changeUser={setNewUser}/>
        <InputPassword identify='newPassword' password={newPassword} changePassword={setnNewPassword} eyeClick={eyeClick} labelContent={'Nova Senha'}/>
        <InputPassword identify='confirmPassword' password={confirmPassword} changePassword={setConfirmPassword} eyeClick={eyeClick} labelContent={'Confirmar Senha'} confirmation={'inputs confirmContent'}/>

        <input type="submit" value="CADASTRAR-SE" />
        <ButtonHome></ButtonHome>
      </form>
    </div>
  )
}