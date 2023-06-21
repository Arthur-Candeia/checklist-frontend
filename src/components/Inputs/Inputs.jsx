import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

export function InputStandart({id, user, changeUser}) {
  return (
    <div className="inputs">
      <label htmlFor={id}>Usuário</label>
      <input type="text" name={id} id={id} value={user} onChange={(ev) => changeUser(ev.target.value)} required minLength={4}/>
    </div>
  )
}

export function InputPassword({id, password, changePassword, eyeClick, labelContent, confirmation}) {
  return (
    <div className={confirmation ?? "inputs seeError"}>
      <label htmlFor={id}>{labelContent ?? 'Senha'}</label>
      <input type="password" name={id} id={id} value={password} onChange={(ev) => changePassword(ev.target.value)} required minLength={8} maxLength={50}/>
      {!confirmation ? <>
        <span className="eye visible" onClick={() => eyeClick(id)}><AiOutlineEye /></span>
        <span className="eye invisible" onClick={() => eyeClick(id)} style={{visibility: 'hidden'}}><AiOutlineEyeInvisible /></span>
        <span className="err">.</span>
      </> : ''}
    </div>
  )
}