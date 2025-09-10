import { useState } from "react";
import "./Login.css";
import LogoFecap from "../assets/logofecap.png";
import Aguia from "../assets/Aguia.svg";
import AguiVoando from "../assets/aguiavoando.svg";

function Login() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* container */}
      <div className="container">
        {/* retangulo */}
        <div className="left-side">
          <img className="aguiaVoandoImg" src={AguiVoando} alt="aguia" />
          <h1 className="lead">L.E.A.D.</h1>
          <p className="siglaLead">
            Liderança, Empatia, Ação, e Desenvolvimento
          </p>
          <p className="siglaLead">Levando pessoas ao próximo nível.</p>
        </div>
        {/* background */}
        <div className="right-side">
          <img
            className="backgroundImg"
            src={LogoFecap}
            alt="backgroundfecap"
          />
          <div className="login-box">
            <div className="roles">
              <button>Aluno</button>
              <button>Mentor</button>
              <button>Administrador</button>
            </div>
            <div className="labels">
              <label>E-mail</label>
              <input type="email" placeholder="Insira seu e-mail" />
              <p className="espacamento"></p>
              <label>Senha</label>
              <input type="password" placeholder="" />
              <p className="espacamento"></p>
            </div>
            <a href="#">Esqueci minha senha</a>
            <button class="login-btn">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
