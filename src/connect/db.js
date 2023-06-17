export async function userLogin(name, password) {
  const headers = new Headers({'Content-Type': 'application/json'})
  let body = JSON.stringify({name, password})
  const result = await fetch('https://checklist-fullstack.vercel.app', {headers, body, method: 'POST'})
  const data = await result.json()
  return data;
}

export async function updateDoneTask(user, id, currentCondition, loadPage) {
  const newCondition = currentCondition ? 'false' : 'true'
  await fetch(`https://checklist-fullstack.vercel.app/login/done/${user}/${id}/${newCondition}?_method=put`, {method: 'PUT'})
  loadPage()
}

export async function newTask(user, content, loadPage) {
  await fetch(`https://checklist-fullstack.vercel.app/login/${user}/${content}?_method=post`, {method: 'POST'})
  loadPage()
}

export async function deleteTask(user, index, loadPage) {
  await fetch(`https://checklist-fullstack.vercel.app/login/${user}/${index}?_method=delete`, {method: 'DELETE'})
  loadPage()
}