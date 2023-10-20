import { BsFillSendFill } from 'react-icons/bs'

export default function TableHead({itsNew, saveTask, inputTasks, setInputTasks, positionTask, setItsNew, modifyTask, setTasks}) {
  return (
    <thead>
      <tr style={{textAlign: 'left', position: 'relative'}}>
        <th colSpan={3}>
          <form onSubmit={itsNew ? (ev) => saveTask(ev, inputTasks, setInputTasks, setTasks) : (ev) => modifyTask(ev, positionTask, inputTasks, setInputTasks, setItsNew, setTasks)} id="formTask" autoComplete="off">
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