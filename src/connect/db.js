export async function userLogin(name, password) {
  const headers = new Headers({'Content-Type': 'application/json'})
  let body = JSON.stringify({name, password})
  const result = await fetch('https://checklist-fullstack.vercel.app', {headers, body, method: 'POST'})
  const data = await result.json()
  return data;
}

export async function updateDoneTask(user, id, currentCondition, position) {
  const newCondition = currentCondition ? 'false' : 'true';
  const headers = new Headers({'Content-Type': 'application/json'})
  const objectSessionStorage = JSON.parse(sessionStorage.data)
  objectSessionStorage.tasks[position].done = newCondition == 'true' ? true : false
  sessionStorage.data = JSON.stringify(objectSessionStorage)
  await fetch(`https://checklist-fullstack.vercel.app/login/done/${user}/${id}/${newCondition}`, {headers, method: 'PUT'})
}