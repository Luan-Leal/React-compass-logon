import React from "react";
import { Link } from "react-router-dom";

import CompassBlackLogo from "../../assets/black-logo.png";
import Clock from "../../components/Clock";
import Weather from "../../components/Weather";
import CountDown from "../../components/CountDown";
import Button from "../../components/Button";
import UolBall from "../../assets/uol-ball.png";

import "./index.css";

function Home() {
  return (
    <section className="home-page">
      <header>
        <div>
          <img src={CompassBlackLogo} alt="Compass Black Logo" />
        </div>
        <Clock />
        <Weather />
      </header>

      <main>
        <div className="home-left">
          <img className="uol-ball" src={UolBall} alt="Uol Ball" />
        </div>
        <div className="home-right">
          <div className="mission">
            <h2>Our mission is</h2>
            <p>Nossa missão é</p>
            <h2>to transform the world</h2>
            <p>transformar o mundo</p>
            <h2>building digital experiences</h2>
            <p>construindo experiências digitais</p>
            <h2>that enable our client's growth</h2>
            <p>que permitam o crescimento dos nossos clientes</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-message">
          <p>
            Essa janela do navegador é usada para manter sua sessão de
            autenticação ativa. <br></br> Deixe-a aberta em segundo plano e abra
            uma nova janela para continuar a navegar.
          </p>
        </div>
        <div className="countdown">
          <p className="countdown-warning">
            Application <br></br> refresh in
          </p>
          <CountDown />
        </div>
        <div className="buttons">
          <div className="continue-button">
            <Button text="Continuar Navegando" />
          </div>
          <div className="logout-button">
            <Link to="/">
              <Button text="Logout" />
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Home;
