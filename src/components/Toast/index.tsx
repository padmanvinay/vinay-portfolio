import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  const showToast = ({
    message,
    autoClose,
  }: {
    message: string;
    autoClose: number;
  }) => {
    return toast(message, {
      autoClose: autoClose || 1000,
    });
  };
  return showToast;
};

export default Toast;
