import { useState } from "react"
import { useParams } from "react-router-dom"

export default function teste() {
  let {tasks} = useParams()
  let userTasks = JSON.parse(tasks)
  
  return (
    <div>
      {console.log(userTasks.tasks)}
    </div>
  )
}