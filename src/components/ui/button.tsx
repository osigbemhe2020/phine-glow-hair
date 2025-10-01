import { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import "./style.css";

interface Props {
  text?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  page?: string;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  classname?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<Props> = ({
  text = "Click Me",
  target,
  page,
  icon,
  type = "button",
  classname = "",
  onClick,
  disabled = false,
  loading = false,
}) => {
  return (
    <div className={`main-button ${classname}`}>
      {page ? (
        <Link href={page} target={target}>
          <button
            type={type}
            disabled={disabled || loading}
            aria-label={text}
            onClick={onClick}
            className={`${
              loading ? "bg-blue-900" : "bg-blue-900 hover:bg-blue-400"
            }`}
          >
            {loading ? (
              <>
                <span className="mr-2">Loading...</span>
                <span className="button-spinner"></span>
              </>
            ) : (
              <div className="button-content">
                {icon && <span className="button-icon">{icon}</span>}
                <p className="button-text">{text}</p>
              </div>
            )}
          </button>
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled || loading}
          aria-label={text}
          className={`${
            loading ? "bg-blue-900" : "bg-blue-900 hover:bg-blue-400"
          }`}
        >
          {loading ? (
            <>
              <span className="mr-2">Loading...</span>
              <span className="button-spinner"></span>
            </>
          ) : (
            <div className="button-content">
              {icon && <span className="button-icon">{icon}</span>}
              <p className="button-text">{text}</p>
            </div>
          )}
        </button>
      )}
    </div>
  );
};

export default Button;
