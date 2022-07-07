import { useState, useEffect } from "react";
import "./index.css";

function Clock() {
  const date = new Object();
  date.hour = new Date().getHours();
  date.min = new Date().getMinutes();
  if (date.min.toString().length == 1) date.min = "0" + date.min;
  if (date.hour.toString().length == 1) date.hour = "0" + date.hour;

  date.day = new Date().getDay();
  if (date.day == 0) date.day = "Domingo";
  if (date.day == 1) date.day = "Segunda-Feira";
  if (date.day == 2) date.day = "Terça-Feira";
  if (date.day == 3) date.day = "Quarta-Feira";
  if (date.day == 4) date.day = "Quinta-Feira";
  if (date.day == 5) date.day = "Sexto-Feira";
  if (date.day == 6) date.day = "Sábado";

  date.date = new Date().getDate();
  date.month = new Date().getMonth() + 1;
  if (date.month == 1) date.month = "Janeiro";
  if (date.month == 2) date.month = "Fevereiro";
  if (date.month == 3) date.month = "Março";
  if (date.month == 4) date.month = "Abril";
  if (date.month == 5) date.month = "Maio";
  if (date.month == 6) date.month = "Junho";
  if (date.month == 7) date.month = "Julho";
  if (date.month == 8) date.month = "Agosto";
  if (date.month == 9) date.month = "Setembro";
  if (date.month == 10) date.month = "Outubro";
  if (date.month == 11) date.month = "Novembro";
  if (date.month == 12) date.month = "Dezembro";

  date.year = new Date().getFullYear();

  return (
    <div className="clock">
      <span className="time">
        {date.hour}:{date.min}
      </span>
      <span className="day">
        {date.day}, {date.date} de {date.month} de {date.year}
      </span>
    </div>
  );
}

export default Clock;
