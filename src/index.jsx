import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/Pages/MainPage";
import { useAlertHandlerContext} from "./contexts";
import "./style.css";
import { AlertHandlerProvider } from "./contexts";
import {AlertManager} from "./Organisms/AlertManager";

const AlertHandlerContext = useAlertHandlerContext();
AlertHandlerContext.setAlert

ReactDOM.render(
  <AlertHandlerProvider>
    <AlertManager />
    <MainPage />
  </AlertHandlerProvider>,
  document.getElementById("app")
);