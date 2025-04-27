import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/Pages/MainPage";
import "./style.css";
import { useAlertHandlerContext} from "./contexts/alert_handler";
import { AlertHandlerProvider } from "./contexts/alert_handler";
import {AlertManager} from "./components/Organisms/AlertManager";

const AlertHandlerContext = useAlertHandlerContext();
AlertHandlerContext.setAlert

ReactDOM.render(
  <AlertHandlerProvider>
    <AlertManager />
    <MainPage />
  </AlertHandlerProvider>,
  document.getElementById("app")
);