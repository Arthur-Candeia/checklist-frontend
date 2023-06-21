import { BsTrash3Fill } from 'react-icons/bs'
import { updateDoneTask, deleteTask } from "../../connect/db"

export default function TableBody({loginUser, setInputTasks, setLoginUser, setItsNew, setDone, loadPage, setPositionTask}) {
  return (
    <tbody>
      {loginUser?.tasks?.map((element, index) => {
        return (
          <tr key={index}>
            <td className={(element.done ? 'content checked' : 'content')} id={element._id}>{element.content}</td>
            <td className="checks">
              <input type="checkbox" name="check" id={`input${index}`} checked={element.done} onChange={() => setDone(true)}
              onClick={() => updateDoneTask(loginUser._id, index, element.done, element._id, () => loadPage(setLoginUser))}
              style={{cursor: 'pointer'}}
              />
            </td>
            <td className="options">
              <button className="pencil" onClick={() => {setInputTasks(element.content); setItsNew(false); setPositionTask(index)}}>✏️</button>
              <button className="trash" onClick={() => {confirm(`Deseja realmente excluir a tarefa ${index + 1}?`) ? deleteTask(loginUser._id, index, () => loadPage(setLoginUser)) : ''}}><BsTrash3Fill /></button>
            </td>
          </tr>
        )
      })}
    </tbody>
)
}