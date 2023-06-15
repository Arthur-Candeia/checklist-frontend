import { userLogin } from "../../connect/db";
import { useNavigate } from "react-router-dom";

export function eyeClick() {
  const input = document.querySelector('#password')
  const visible = document.querySelector('.visible')
  const invisible = document.querySelector('.invisible')

  if (visible.style.display != 'none') {
    input.setAttribute('type', 'text')
    visible.style.display = 'none'
    invisible.style.display = 'inline'
  }
  else {
    input.setAttribute('type', 'password')
    visible.style.display = 'inline'
    invisible.style.display = 'none'
  }
}