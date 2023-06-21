import { userLogin, newTask, editTask } from "../../connect/db"
import { useNavigate } from "react-router-dom"

export default function hookUser() {

  const navigate = useNavigate()

  function loadPage(setLoginUser) {
    try {
      userLogin(sessionStorage.user, sessionStorage.password).then((result) => {
        if (!result.err) {
          setLoginUser(result.user)
        }
        else {!sessionStorage.data ? navigate('/') : ''}
      })
    }
    catch {!sessionStorage.data ? navigate('/') : ''}
  }
  
  async function saveTask(ev, loginUser, inputTasks, setInputTasks, setLoginUser) {
    ev.preventDefault()
    setInputTasks('')
    await newTask(loginUser._id, inputTasks, () => loadPage(setLoginUser))
  }
  
  async function modifyTask(ev, loginUser, positionTask, inputTasks, setInputTasks, setItsNew, setLoginUser) {
    ev.preventDefault()
    await editTask(loginUser._id, positionTask, inputTasks, () => loadPage(setLoginUser))
    setInputTasks('')
    setItsNew(true)
  }
  
  function logout() {
    if(confirm('Deseja realmente sair?')) {
      sessionStorage.removeItem('user')
      sessionStorage.removeItem('password')
      sessionStorage.removeItem('data')
      navigate('/')
    }
  }

  return {loadPage, saveTask, modifyTask, logout }
}