import ButtonHome from './ButtonHome'
import './Terms.scss'

export default function Terms() {

  return (
    <div id="termsContainer">
      <h1 id="termsTitle">Termos de Uso e Responsabilidade</h1>
      <div id="termsContent">
      <p>O CHECKLIST constitui um projeto de estudos desprovido de intenções comerciais, visando adquirir conhecimentos em recursos e linguagens de programação. Ao utilizar esta aplicação, o usuário manifesta sua concordância com os termos de uso aqui estabelecidos, comprometendo-se, ainda, a acatar todas as disposições legais, tanto cíveis como penais, que regem a Constituição da República Federativa do Brasil.</p>
      <p>Cumpre ressaltar que esta aplicação de página única (SPA) faz uso dos servidores AWS para fins de hospedagem, os quais são providos pela empresa MongoDB Atlas. A fim de garantir sua segurança, são empregadas técnicas de criptografia hash para as senhas (criptografia de mão única), bem como outro tipo de criptografia para as tarefas, a qual permite sua descriptografia para exibição. Ademais, são utilizadas variáveis de ambiente alocadas na empresa Vercel Inc., as quais conferem maior segurança aos usuários da aplicação.</p>
      <p>Destaca-se que todas as tarefas e senhas armazenadas são disponibilizadas de forma criptografada ao criador da aplicação, tendo em vista que a manutenção do banco de dados se faz necessária. Entretanto, o desenvolvedor se compromete a não utilizar os dados de terceiros, mesmo quando criptografados, assegurando, assim, a privacidade do usuário.</p>
      <p>Visando sua segurança, recomendamos que não se efetue o login em nossos servidores utilizando computadores, tablets ou celulares pertencentes a terceiros, a fim de evitar a exposição indesejada de suas informações. Qualquer vazamento de dados, por sua vez, é de inteira responsabilidade das empresas de hospedagem e armazenamento desta SPA.</p>
      <p>Cabe ressaltar que o criador da aplicação está isento de qualquer e toda responsabilidade legal, uma vez que esta aplicação foi concebida estritamente com propósitos didáticos e não conta com as características necessárias para ser considerada comercial. Portanto, eventuais problemas e dúvidas devem ser direcionados diretamente às empresas de hospedagem e armazenamento mencionadas anteriormente.</p>
      <p>Agradecemos por utilizar esta aplicação e exortamos o usuário a agir com responsabilidade, tendo em mente que este projeto foi elaborado unicamente com propósitos acadêmicos.</p>
      </div>
      <ButtonHome></ButtonHome>
    </div>
  )
}