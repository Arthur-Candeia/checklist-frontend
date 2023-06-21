import { useEffect, useState } from "react"
import hookUser from "./hookUser";
import TableHead from './TableHead';
import TableBody from "./TableBody";
import './User.scss';

export default function User({user}) {

  const {loadPage, saveTask, modifyTask, logout} = hookUser()
  const [loginUser, setLoginUser] = useState('')
  const [inputTasks, setInputTasks] = useState('')
  const [itsNew, setItsNew] = useState(true)
  const [positionTask, setPositionTask] = useState('')
  const [done, setDone] = useState()
  

  useEffect(() => {
    if (user) {
      setLoginUser(user.user)
      sessionStorage.data = JSON.stringify(user.user)
    }
    else {
      loadPage(setLoginUser)
    }
  }, [])

  if (user || sessionStorage.data) {
  return (
    <div id="pageUser">
      <h1 id="welcome">{loginUser.name ? `Olá, ${loginUser.name}!` : ''}
      <button id="logout" onClick={() => logout()}>SAIR</button>
      </h1>
      <table>
        <TableHead
        itsNew={itsNew} saveTask={saveTask}
        loginUser={loginUser} inputTasks={inputTasks}
        setInputTasks={setInputTasks} setLoginUser={setLoginUser}
        positionTask={positionTask} setItsNew={setItsNew}
        modifyTask={modifyTask}>
        </TableHead>

        <TableBody
        loginUser={loginUser} setDone={setDone}
        loadPage={loadPage} setLoginUser={setLoginUser}
        setInputTasks={setInputTasks} setItsNew={setItsNew}
        setPositionTask={setPositionTask}
        >
        </TableBody>
        </table>
    </div>
  )}
}