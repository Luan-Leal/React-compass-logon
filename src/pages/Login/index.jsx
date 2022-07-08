import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";
import Input from "../../components/Form/index";
import Button from "../../components/Button/index";

import WhiteLogo from "../../assets/white-logo.png";
import UserIcon from "../../assets/user-icon.png";
import PasswordIcon from "../../assets/password-icon.png";

function Login() {
  const nav = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSaveUser = (event) => {
    event.preventDefault();
    const data = { user, password };
    if (data.user && data.password === "admin") {
      nav("/home");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <section className="login-page">
      <div className="left">
        <div>
          <img className="white-logo" src={WhiteLogo} alt="Compass logo" />
        </div>
        <div className="welcome-phase">
          <h1>Olá,</h1>
          <p>
            Para continuar navegando de forma <br></br> segura, efetue o login
            na rede.
          </p>
        </div>
        <form>
          <label>
            <h2 className="login-text">Login</h2>
            <div className="user">
              <Input
                type="name"
                placeholder="Usuário"
                name="user"
                value={user}
                onChange={(event) => setUser(event.target.value)}
              />
              <i>
                <img src={UserIcon} alt="" />{" "}
              </i>
            </div>

            <div className="password">
              <Input
                type="password"
                placeholder="Senha"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></Input>
              <i>
                <img src={PasswordIcon} alt="" />{" "}
              </i>
            </div>

            <div className="error">
              {error && (
                <span>
                  Ops, usuário ou senha inválidos. <br></br> Tente novamente!
                </span>
              )}
            </div>

            <Button
              className="login-button"
              text="Continuar"
              onClick={handleSaveUser}
            />
          </label>
        </form>
      </div>

      <div className="right">
        <img className="white-logo" src={WhiteLogo} alt="Compass logo" />
      </div>
    </section>
  );
}

export default Login;
