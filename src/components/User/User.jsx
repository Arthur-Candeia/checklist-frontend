import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useUser } from "./useUser";
import TableHead from './TableHead';
import TableBody from "./TableBody";
import './User.scss';

export default function User({sucessLogin}) {

  const {saveTask, modifyTask, logout, clearInfos} = useUser()
  const [inputTasks, setInputTasks] = useState('')
  const [itsNew, setItsNew] = useState(true)
  const [positionTask, setPositionTask] = useState('')
  const [done, setDone] = useState()
  const [tasks, setTasks] = useState()

  useEffect(() => {
    if (!sessionStorage.token || !sessionStorage.secret || !sucessLogin) clearInfos()
    else if (sucessLogin) setTasks(JSON.parse(sessionStorage.tasks))
  }, [])

  if (sucessLogin && sessionStorage.token) {
  return (
    <div id="pageUser">
      <div id="welcome">{sessionStorage.name ? <h1>{`Olá, ${JSON.parse(sessionStorage.name)}!`}</h1> : ''}
      <button id="logout" onClick={() => logout()}>SAIR</button>
      </div>
      <table>
        <TableHead
        itsNew={itsNew} saveTask={saveTask}
        setTasks={setTasks}
        inputTasks={inputTasks}
        setInputTasks={setInputTasks}
        positionTask={positionTask} setItsNew={setItsNew}
        modifyTask={modifyTask}>
        </TableHead>

        <TableBody
        setDone={setDone}
        setTasks={setTasks}
        setInputTasks={setInputTasks} setItsNew={setItsNew}
        setPositionTask={setPositionTask}
        tasks={tasks}
        >
        </TableBody>
        </table>
    </div>
  )}
}