import { useEffect, useState } from "react"
import { FaPencilAlt} from 'react-icons/fa'
import {BsTrash3Fill, BsFillSendFill} from 'react-icons/bs'
import { useNavigate } from "react-router-dom"
import { userLogin, updateDoneTask, newTask } from "../../connect/db"
import './User.scss';

export default function User({user}) {

  const [loginUser, setLoginUser] = useState('')
  const [inputTasks, setInputTasks] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      setLoginUser(user.user)
      sessionStorage.data = JSON.stringify(user.user)
    }
    else {
      try {
        userLogin(sessionStorage.user, sessionStorage.password).then((result) => {
          if (!result.err) {
            setLoginUser(result.user)
          }
        })
      }
      catch {!user && !sessionStorage.data ? navigate('/') : ''}
    }
  }, [])

  async function saveTask(ev) {
    ev.preventDefault()
    try{await newTask(loginUser._id, inputTasks); location.reload()}
    catch{location.reload()}
  }

  return (
    <div>
      <h1>{loginUser.name}</h1>
      <table>
        <thead>
          <tr style={{textAlign: 'left', position: 'relative'}}>
            <th colSpan={3}>
              <form onSubmit={(ev) => saveTask(ev)}>
                <input type="text" name="inputTasks" id="inputTasks" value={inputTasks} onChange={(ev) => setInputTasks(ev.target.value)} placeholder="Adicionar nova tarefa"/>
                <button type="submit" id="submit"><BsFillSendFill /></button>
              </form>
            </th>
          </tr>
          <tr>
            <th>Tarefas</th>
            <th>Estado</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {loginUser?.tasks?.map((element, index) => {
            return (
              <tr key={index}>
                <td className={element.done ? 'content checked' : 'content'}>{element.content}</td>
                <td className="checks">
                  <input type="checkbox" name="check" id={element._id} defaultChecked={loginUser.tasks[index].done} 
                  onClick={() => updateDoneTask(loginUser._id, element._id, element.done, index, setLoginUser)}
                  />
                </td>
                <td className="options">
                  <button className="pencil"><FaPencilAlt /></button>
                  <button className="trash"><BsTrash3Fill /></button>
                </td>
              </tr>
            )
          })}
        </tbody>
        </table>
    </div>
  )
}

/*
setLoginUser(JSON.parse(sessionStorage.data))


userLogin(sessionStorage.user, sessionStorage.password).then((result) => {
  setLoginUser(result.user)

  function doneTask(id, index) {
    //updateDoneTask(loginUser._id, element._id, element.done, index)
    updateDoneTask(loginUser._id, id, loginUser.tasks[index].done, index, setLoginUser)
  }
})
*/