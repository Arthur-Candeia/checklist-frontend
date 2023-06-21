import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

export function InputStandart({identify, user, changeUser}) {
  return (
    <div className="inputs">
      <label htmlFor={identify}>Usuário</label>
      <input type="text" name={identify} id={identify} value={user} onChange={(ev) => changeUser(ev.target.value)} required minLength={4}/>
    </div>
  )
}

export function InputPassword({identify, password, changePassword, eyeClick, labelContent, confirmation}) {
  return (
    <div className={confirmation ?? "inputs seeError"}>
      <label htmlFor={identify}>{labelContent ?? 'Senha'}</label>
      <input type="password" name={identify} id={identify} value={password} onChange={(ev) => changePassword(ev.target.value)} required minLength={8} maxLength={50}/>
      {!confirmation ? <>
        <span className="eye visible" onClick={() => eyeClick(identify)}><AiOutlineEye /></span>
        <span className="eye invisible" onClick={() => eyeClick(identify)} style={{visibility: 'hidden'}}><AiOutlineEyeInvisible /></span>
        <span className="err" style={{visibility: 'hidden'}}>.</span>
      </> : ''}
    </div>
  )
}