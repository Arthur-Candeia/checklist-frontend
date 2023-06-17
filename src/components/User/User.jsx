import { useEffect, useState } from "react"
import { json, useNavigate } from "react-router-dom"
import { userLogin, updateDoneTask } from "../../connect/db"

export default function User({user}) {

  const [loginUser, setLoginUser] = useState('')
  const [check, setCheck] = useState(false)
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

  return (
    <div>
      <h1>{loginUser.name}</h1>
      <table>
        <tbody>
          {loginUser?.tasks?.map((element, index) => {
            return (
              <tr key={index}>
                <td className={element.done ? 'content checked' : 'content'}>{element.content}</td>
                <td>
                  <input type="checkbox" name="check" id={element._id} defaultChecked={loginUser.tasks[index].done} 
                  onClick={() => updateDoneTask(loginUser._id, element._id, element.done, index, setLoginUser)}
                  />
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