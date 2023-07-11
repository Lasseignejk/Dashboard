interface InputProps {
    styling?: string;
    type: string;
    placeholder?: string;
    name?: string;
    functionName?: any;
    value?: string;
    checked?: boolean;
    id?: string | number;
}

const Input = ({styling, type, placeholder, name, functionName, value}:InputProps):JSX.Element => {
  return (
    <input className={styling} placeholder={placeholder} name={name} value={value} onChange={(e) => functionName(e.target.name, e.target.value)} type={type} />
  )
}

export default Input