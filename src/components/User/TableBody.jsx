import { BsTrash3Fill } from 'react-icons/bs'
import { updateDoneInSS, useUser } from './useUser'
import { useEffect } from 'react'

export default function TableBody({setInputTasks, setItsNew, setDone, setPositionTask, tasks, setTasks}) {
  const {updateDone, removeTask} = useUser()

  // useEffect(() => {
  //   setTasks(tasks)
  // }, [sessionStorage.tasks])

  return (
    <tbody>
      {tasks?.map((element, index) => {
        return (
          <tr key={index}>
            <td className={(element.done ? 'content checked' : 'content')} id={element._id}>{element.content}</td>
            <td className="checks">
              <input type="checkbox" name="check" id={`input${index}`} defaultChecked={element.done}
              onChange={(ev) => {updateDone(ev, index, element.done, element._id, setTasks)}}
              style={{cursor: 'pointer'}}
              />
            </td>
            <td className="options">
              <button className="pencil" onClick={(ev) => {setInputTasks(element.content); setItsNew(false); setPositionTask(index)}}>✏️</button>
              <button className="trash" onClick={(ev) => {confirm(`Deseja realmente excluir a tarefa ${index + 1}?`) ? removeTask(ev, index, setTasks) : ''}}><BsTrash3Fill /></button>
            </td>
          </tr>
        )
      })}
    </tbody>
)
}