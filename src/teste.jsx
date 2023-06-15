import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { userLogin } from "./connect/db"

export default function teste({user}) {

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
      <p>{loginUser?.tasks?.map((element, index) => <li key={index}>{element.content}</li>)}</p>
    </div>
  )
}

/*
userLogin(sessionStorage.user, sessionStorage.password).then((result) => {
  setLoginUser(result.user)
})
*/