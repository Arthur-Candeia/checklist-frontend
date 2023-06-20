import { useEffect, useState } from "react"
import {BsTrash3Fill, BsFillSendFill} from 'react-icons/bs'
import { useNavigate } from "react-router-dom"
import { userLogin, updateDoneTask, newTask, deleteTask, editTask } from "../../connect/db"
import './User.scss';

export default function User({user}) {

  const [loginUser, setLoginUser] = useState('')
  const [inputTasks, setInputTasks] = useState('')
  const [itsNew, setItsNew] = useState(true)
  const [positionTask, setPositionTask] = useState('')
  const [done, setDone] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      setLoginUser(user.user)
      sessionStorage.data = JSON.stringify(user.user)
    }
    else {
      loadPage()
    }
  }, [])

  function loadPage() {
    try {
      userLogin(sessionStorage.user, sessionStorage.password).then((result) => {
        if (!result.err) {
          setLoginUser(result.user)
        }
        else {!user && !sessionStorage.data ? navigate('/') : ''}
      })
    }
    catch {!user && !sessionStorage.data ? navigate('/') : ''}
  }

  async function saveTask(ev) {
    ev.preventDefault()
    setInputTasks('')
    await newTask(loginUser._id, inputTasks, loadPage)
  }

  async function modifyTask(ev) {
    ev.preventDefault()
    await editTask(loginUser._id, positionTask, inputTasks, loadPage)
    setInputTasks('')
    setItsNew(true)
  }

  function logout() {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('password')
    sessionStorage.removeItem('data')
    navigate('/')
  }

  if (user || sessionStorage.data) {
  return (
    <div id="pageUser">
      <h1 id="welcome">{loginUser.name ? `Olá, ${loginUser.name}!` : ''}
      <button id="logout" onClick={() => logout()}>SAIR</button>
      </h1>
      <table>
        <thead>
          <tr style={{textAlign: 'left', position: 'relative'}}>
            <th colSpan={3}>
              <form onSubmit={itsNew ? (ev) => saveTask(ev) : (ev) => modifyTask(ev)} id="formTask" autoComplete="off">
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
                <td className={(element.done ? 'content checked' : 'content')} id={element._id}>{element.content}</td>
                <td className="checks">
                  <input type="checkbox" name="check" id={`input${index}`} checked={element.done} onChange={() => loadPage()}
                  onClick={() => updateDoneTask(loginUser._id, index, element.done, element._id, loadPage)}
                  style={{cursor: 'pointer'}}
                  />
                </td>
                <td className="options">
                  <button className="pencil" onClick={() => {setInputTasks(element.content); setItsNew(false); setPositionTask(index)}}>✏️</button>
                  <button className="trash" onClick={() => {confirm(`Deseja realmente excluir a tarefa ${index + 1}?`) ? deleteTask(loginUser._id, index, loadPage) : ''}}><BsTrash3Fill /></button>
                </td>
              </tr>
            )
          })}
        </tbody>
        </table>
    </div>
  )}
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