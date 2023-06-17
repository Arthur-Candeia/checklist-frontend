export async function userLogin(name, password) {
  const headers = new Headers({'Content-Type': 'application/json'})
  let body = JSON.stringify({name, password})
  const result = await fetch('https://checklist-fullstack.vercel.app', {headers, body, method: 'POST'})
  const data = await result.json()
  return data;
}

export async function updateDoneTask(user, id, currentCondition, position, setLoginUser) {
  const newCondition = currentCondition ? 'false' : 'true'
  const objectSessionStorage = JSON.parse(sessionStorage.data)
  objectSessionStorage.tasks[position].done = newCondition === 'true' ? true : false
  sessionStorage.data = JSON.stringify(objectSessionStorage)
  setLoginUser(objectSessionStorage)
  await fetch(`https://checklist-fullstack.vercel.app/login/done/${user}/${id}/${newCondition}?_method=put`, {method: 'PUT'})
}

export async function newTask(user, content) {
  await fetch(`https://checklist-fullstack.vercel.app/login/${user}/${content}?_method=post`, {method: 'POST'})
  location.reload()
}