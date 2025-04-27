import React,{useEffect} from "react";
import { Alert } from "../../../components/Atoms/Alert";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

export const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  console.log(AlertHandlerContext.visible);

  useEffect(() => {
    if (AlertHandlerContext.visible) {
      const timer = setTimeout(() => {
        AlertHandlerContext.closeAlert();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [AlertHandlerContext.visible]);

  return (
    <Alert  />
  )
}

