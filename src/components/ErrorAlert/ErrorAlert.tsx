import { AlertWrapper } from "./ErrorAlert.style.ts";

interface IErrorAlertProps {
  message: string;
}

const ErrorAlert = ({ message }: IErrorAlertProps) => {
  return <AlertWrapper>{message}</AlertWrapper>;
};

export default ErrorAlert;
