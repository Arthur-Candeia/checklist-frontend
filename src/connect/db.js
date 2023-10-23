import { BASE_URL } from "./BASE_URL"

function secret() {
  return JSON.parse(sessionStorage.secret ?? '{}')
}

function headers() {
  return {
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${JSON.parse(sessionStorage.token ?? '{}')}`
  }
}

export async function userLogin(name, password) {
  const headers = new Headers({'Content-Type': 'application/json'})
  const body = JSON.stringify({name, password})
  const result = await fetch(`${BASE_URL}`, {headers, body, method: 'POST'})
  const data = await result.json()
  return data;
}

export async function updateDoneTask(index, currentCondition, tdClass) {
  document.getElementById(tdClass).classList.toggle('checked')
  const body = JSON.stringify({secret: secret()})
  const response = await fetch(`${BASE_URL}/login/done/${index}/${!currentCondition}`, {method: 'PUT', headers: headers(), body})
  if (await response.json().then((result) => result.hasOwnProperty('msg'))) return null
  return true
}

export async function newTask(content) {
  const body = JSON.stringify({content, secret: secret()})
  const response = await fetch(`${BASE_URL}/login`, {headers: headers(), body, method: 'POST'})
  if (await response.json().then((result) => result.hasOwnProperty('msg'))) return null
  return true
}

export async function deleteTask(index) {
  const body = JSON.stringify({secret: secret()})
  const response = await fetch(`${BASE_URL}/login/${index}`, {method: 'DELETE', headers: headers(), body})
  if (await response.json().then((result) => result.hasOwnProperty('msg'))) return null
  return true
}

export async function editTask(index, content) {
  let body = JSON.stringify({index, content, secret: secret()})
  const response = await fetch(`${BASE_URL}/login`, {headers: headers(), body, method: 'PUT'})
  if (await response.json().then((result) => result.hasOwnProperty('msg'))) return null
  return true
}

export async function newUserSave(name, password) {
  const headers = new Headers({'Content-Type': 'application/json'})
  let body = JSON.stringify({name, password})
  const result = await fetch(`${BASE_URL}/newuser`, {headers, body, method: 'POST'})
  const data = await result.json()
  return data;
}