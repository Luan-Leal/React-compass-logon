import React, { useState } from "react";
import{useNavigate} from "react-router-dom"

import "./index.css";
import Input from "../../components/Form/index";
import Button from "../../components/Button/index";
import WhiteLogo from "../../assets/white-logo.png";

function Login() {
  const nav = useNavigate()
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  const handleSaveUser = (event) => {
    event.preventDefault()
    const data = {user, password}
    if(data.user && data.password === "admin"){
      alert("certo")
      nav("/home")
    }else{
      alert("errado")
    }
  }

  return (
    <section className="login-page">
      <div className="left">
        <div className="welcome-phase">
          <h1>Olá,</h1>
          <p>
            Para continuar navegando de forma segura, efetue o login na rede.
          </p>
        </div>
        <form>
          <label>
            <h2 className="login-text">Login</h2>

            <Input type="name" placeholder="Usuário" name="user"
            value={user}
            onChange={event => setUser(event.target.value)}
            />

            <Input type="password" placeholder="Senha" name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            ></Input>

            {
            <div className="error">
              <span>Ops, usuário ou senha inválidos. Tente novamente!</span>
            </div>
            }
           <Button text="Continuar" onClick={handleSaveUser}/>
          </label>
        </form>
      </div>

      <div className="right">
        <img className="white-logo" src={WhiteLogo} alt="" />
      </div>
    </section>
  );
}

export default Login;
