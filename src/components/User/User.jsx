import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { userLogin, updateDoneTask } from "../../connect/db"

export default function User({user}) {

  const [loginUser, setLoginUser] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      setLoginUser(user.user)
      sessionStorage.data = JSON.stringify(user.user)
    }
    else {
      try {setLoginUser(JSON.parse(sessionStorage.data))}
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
                  onClick={() => updateDoneTask(loginUser._id, element._id, element.done, loginUser.tasks.indexOf(element))}
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
userLogin(sessionStorage.user, sessionStorage.password).then((result) => {
  setLoginUser(result.user)
})
*/