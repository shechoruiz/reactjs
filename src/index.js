import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import Badge from "./components/badge";
import App from "./components/App";
// import foto from "./images/Foto.jpg";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(
//   <Badge
//     firstName="Sergio"
//     lastName="Ruiz"
//     jobTitle="Engineer Frontend"
//     twitter="shecho_ruiz"
//     avatarUrl={foto}
//   />,
//   container
// );
ReactDOM.render(<App />, container);
