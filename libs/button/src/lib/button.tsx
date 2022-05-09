import './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  [key: string]: any;
}

export function Button({ onclick, children }: ButtonProps) {
  return (
    <button className="button" onClick={onclick}>
      {children}
    </button>
  );
}

export default Button;
