import './input.module.scss';

/* eslint-disable-next-line */
export interface InputProps {}

export function Input(props: InputProps) {
  return <input type="text" style={{ width: '100%' }} />;
}

export default Input;
