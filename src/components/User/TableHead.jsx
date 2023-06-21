import { BsFillSendFill } from 'react-icons/bs'

export default function TableHead({itsNew, saveTask, loginUser, inputTasks, setInputTasks, setLoginUser, positionTask, setItsNew, modifyTask}) {
  return (
    <thead>
      <tr style={{textAlign: 'left', position: 'relative'}}>
        <th colSpan={3}>
          <form onSubmit={itsNew ? (ev) => saveTask(ev, loginUser, inputTasks, setInputTasks, setLoginUser) : (ev) => modifyTask(ev, loginUser, positionTask, inputTasks, setInputTasks, setItsNew, setLoginUser)} id="formTask" autoComplete="off">
            <input type="text" name="inputTasks" id="inputTasks" value={inputTasks} onChange={(ev) => setInputTasks(ev.target.value)} placeholder="Adicionar nova tarefa"/>
            <button type="submit" id="submit"><BsFillSendFill /></button>
          </form>
        </th>
      </tr>
      <tr>
        <th id="thTarefas">Tarefas</th>
        <th>Estado</th>
        <th>Opções</th>
      </tr>
    </thead>
  )
}