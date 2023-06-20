import { useNavigate } from "react-router-dom"
import './Terms.scss';

export default function ButtonHome() {
  const navigate = useNavigate()
  return (
    <button className="buttonHome" onClick={() => navigate('/')}>
      Voltar para a tela de login 🏠
    </button>
  )
}