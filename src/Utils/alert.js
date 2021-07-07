import ALERT_TYPES from "../Data/Enums/AlertTypes";

const Alert = (type, message) => {
  switch (type) {
    case ALERT_TYPES.SUCCESS:
      return alert(message);
    case ALERT_TYPES.ERROR:
      return alert(message);
    case ALERT_TYPES.WARNING:
      return alert(message);
    default:
      return alert(message);
  }
};

export default Alert;
