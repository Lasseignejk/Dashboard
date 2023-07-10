interface ButtonProps {
    text: string;
    outline: boolean;
    functionName?: () => void
    styling?: string
}
const Button = ({text, outline, functionName, styling}:ButtonProps):JSX.Element => {
    const buttonClasses = outline ? "outline_button" : "filled_button"
  return (
		<button
			className={`${styling} ${buttonClasses}`}
			onClick={functionName}>
			{text}
		</button>
  );
}

export default Button