export async function userLogin(name, password) {
  const headers = new Headers({'Content-Type': 'application/json'})
  let body = JSON.stringify({name, password})
  const result = await fetch('https://checklist-fullstack.vercel.app', {headers, body, method: 'POST'})
  const data = await result.json()
  return data;
}