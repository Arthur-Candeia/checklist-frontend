import { useEffect, useState } from "react"
import { userLogin } from "./connect/db"

export default function teste({user}) {

  const [loginUser, setLoginUser] = useState('')

  useEffect(() => {
    console.log('vezes')
    if (sessionStorage.user) {
        userLogin(sessionStorage.user, sessionStorage.password).then((result) => {
        setLoginUser(result.user)
      })
    }
    else {
      setLoginUser(user.user)
    }
  }, [])

  return (
    <div>
      <h1>{loginUser.name}</h1>
      {console.log(loginUser)}
    </div>
  )
}