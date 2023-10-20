import { newTask, editTask, updateDoneTask, deleteTask } from "../../connect/db"
import { useNavigate } from "react-router-dom"

export function useUser() {

  const navigate = useNavigate()
  
  async function saveTask(ev, inputTasks, setInputTasks, setTasks) {
    ev.preventDefault()
    setTasks(saveTaskInSS(inputTasks))
    setInputTasks('')
    const result = await newTask(inputTasks)
    result == null ? logout() : ''
  }
  
  async function modifyTask(ev, positionTask, inputTasks, setInputTasks, setItsNew, setTasks) {
    ev.preventDefault()
    setTasks(modifyTaskInSS(positionTask, inputTasks))
    setInputTasks('')
    setItsNew(true)
    const result = await editTask(positionTask, inputTasks)
    result == null ? logout() : ''
  }

  async function updateDone(ev, index, currentCondition, tdClass, setTasks) {
    setTasks(updateDoneInSS(index, currentCondition))
    const result = await updateDoneTask(index, currentCondition, tdClass)
    result == null ? logout() : ''
  }

  async function removeTask(ev, index, setTasks) {
    ev.preventDefault()
    setTasks(removeTaskInSS(index))
    const result = await deleteTask(index)
    result == null ? logout() : ''
  }
  
  function logout() {
    if(confirm('Deseja realmente sair?')) {
      clearInfos()
    }
  }

  function clearInfos() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('secret')
    sessionStorage.removeItem('tasks')
    sessionStorage.removeItem('name')
    navigate('/')
  }

  return {saveTask, modifyTask, updateDone, removeTask, logout, clearInfos}
}

function saveTaskInSS(content) {
  const tasks = JSON.parse(sessionStorage.tasks)
  tasks.push({content, done: false})
  sessionStorage.tasks = JSON.stringify(tasks)
  return tasks
}

function modifyTaskInSS(positionTask, content) {
  const tasks = JSON.parse(sessionStorage.tasks)
  tasks[positionTask].content = content
  sessionStorage.tasks = JSON.stringify(tasks)
  return tasks
}

function removeTaskInSS(positionTask) {
  const tasks = JSON.parse(sessionStorage.tasks)
  tasks.splice(positionTask, 1)
  sessionStorage.tasks = JSON.stringify(tasks)
  return tasks
}

export function updateDoneInSS(positionTask, currentCondition) {
  const tasks = JSON.parse(sessionStorage.tasks)
  tasks[positionTask].done = !currentCondition
  sessionStorage.tasks = JSON.stringify(tasks)
  return tasks
}