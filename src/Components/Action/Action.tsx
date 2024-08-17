import { useState } from "react";
import Button from "@mui/material/Button";
import Notification from "../Notification/Notification";
import { Status } from "../../Interfaces/NotificationProp";
import style from "./style.module.scss";

function Action() {
  const [stateNotification, setStateNotification] = useState<boolean | null>(
    null
  );
  // Можно вынести в отдельный файл
  const simulateServer = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve();
        setStateNotification(true);
        console.log(true);
      } else {
        setTimeout(() => {
          reject();
          setStateNotification(false);
          console.log(false);
        }, 1000);
      }
    });
  };

  return (
    <div className={style.modal__block}>
      {stateNotification !== null && (
        <Notification
          setStateNotification={setStateNotification}
          status={stateNotification ? Status.success : Status.error}
          label={stateNotification ? "Успешно" : "Изменения не сохранены"}
          text={
            stateNotification
              ? "Изменения успешно сохранены"
              : "Потеря интернет соединения"
          }
        />
      )}
      <Button variant="outlined" type="button" onClick={simulateServer}>
        Outlined
      </Button>
    </div>
  );
}

export default Action;
