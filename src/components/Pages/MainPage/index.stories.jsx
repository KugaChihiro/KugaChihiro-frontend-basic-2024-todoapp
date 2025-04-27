import React from "react";
import MainPage from "./index";
import { AlertHandlerProvider } from "../../../contexts/alert_handler";
import {AlertManager} from "../../Organisms/AlertManager";

export default {
  title: "Components/Pages/MainPage",
  component: MainPage,
};

export const Default = {};
Default.args = {};
Default.decorators = [
  (Story) => (
    <div>
      <AlertHandlerProvider>
        <AlertManager />
        <Story />
      </AlertHandlerProvider>
    </div>
  ),
];
