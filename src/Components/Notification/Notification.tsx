import { useEffect, useState } from "react";
import style from "./style.module.scss";
import { PropInt, Status } from "../../Interfaces/NotificationProp";
import accept from "./../../Images/accept.png";
import reject from "./../../Images/decline.png";
import Modal from "../Modal/Modal";

const Notification = ({
  status,
  label,
  text,
  setStateNotification,
}: PropInt) => {
  const [stateTime, setStateTime] = useState<number>(3);
  const [paused, setPaused] = useState<boolean>(false);
  // const [progressClass, setProgressClass] = useState<string>(
  //   style["progress-active"]
  // );

  useEffect(() => {
    if (stateTime === 0) {
      setStateNotification(null);
    }

    if (!paused) {
      const time = setTimeout(() => {
        setStateTime((prev) => prev - 1);
        console.log(stateTime);
      }, 1000);

      return () => {
        clearTimeout(time);
      };
    }
  }, [stateTime, paused, setStateNotification]);

  const handleMouseEnter = () => {
    setPaused(true);
    // setProgressClass("");
    // setProgressClass(""); // Остановите прогресс-бар
  };

  const handleMouseLeave = () => {
    setPaused(false);
    // setProgressClass(style["progress-active"]);
    // setProgressClass(style["progress-active"]); // Продолжите прогресс-бар
  };

  const progressWidth = (stateTime / 3) * 100;

  return (
    <Modal>
      <div
        data-testid="modal"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={style.notification}
      >
        {status === Status.success ? (
          <img src={accept} alt="success" className={style.success} />
        ) : (
          <img src={reject} alt="error" className={style.reject} />
        )}
        <div className={style.block__description}>
          <h2 className={style.header}>{label}</h2>
          <p className={style.description}>{text}</p>
          <div
            className={`${style.blocks} ${paused ? style.paused : ""}`}
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      </div>
    </Modal>
  );
};

export default Notification;
