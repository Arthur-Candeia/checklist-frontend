export async function userLogin(name, password) {
  const headers = new Headers({'Content-Type': 'application/json'})
  let body = JSON.stringify({name, password})
  const result = await fetch('https://checklist-fullstack.vercel.app', {headers, body, method: 'POST'})
  const data = await result.json()
  return data;
}

export async function updateDoneTask(user, index, currentCondition, tdClass, loadPage) {
  const newCondition = currentCondition ? 'false' : 'true'

  document.getElementById(tdClass).classList.toggle('checked')

  await fetch(`https://checklist-fullstack.vercel.app/login/done/${user}/${index}/${newCondition}?_method=put`, {method: 'PUT'})
  loadPage()
}

export async function newTask(id, content, loadPage) {
  const headers = new Headers({'Content-Type': 'application/json'})
  let body = JSON.stringify({id, content})
  await fetch(`https://checklist-fullstack.vercel.app/login?_method=post`, {headers, body, method: 'POST'})
  loadPage()
}

export async function deleteTask(user, index, loadPage) {
  await fetch(`https://checklist-fullstack.vercel.app/login/${user}/${index}?_method=delete`, {method: 'DELETE'})
  loadPage()
}

export async function editTask(id, index, content, loadPage) {
  const headers = new Headers({'Content-Type': 'application/json'})
  let body = JSON.stringify({id, index, content})
  await fetch(`https://checklist-fullstack.vercel.app/login?_method=put`, {headers, body, method: 'PUT'})
  loadPage()
}

export async function newUserSave(name, password) {
  const headers = new Headers({'Content-Type': 'application/json'})
  let body = JSON.stringify({name, password})
  const result = await fetch('https://checklist-fullstack.vercel.app/newuser', {headers, body, method: 'POST'})
  const data = await result.json()
  return data;
}