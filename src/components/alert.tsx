import { ReactNode } from "react";

interface props {
  children: ReactNode;
  onClose: () => void;
  color?: "warning" | "success" | "secondary" | "primary" | "dark";
}

function Alert({ children, onClose, color = "success" }: props) {
  return (
    <div
      className={`alert alert-${color} alert-dismissible fade show`}
      role="alert"
    >
      {children}
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
