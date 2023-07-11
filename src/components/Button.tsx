interface ButtonProps {
    text: string;
    outline: boolean;
    functionName?: () => void;
    styling?: string;
    type?: "reset" | "button" | "submit";
}

const Button = ({text, outline, functionName, styling, type}:ButtonProps):JSX.Element => {
    const buttonClasses = outline ? "outline_button" : "filled_button"
  return (
		<button
      type={type}
			className={`${styling} ${buttonClasses}`}
			onClick={functionName}>
			{text}
		</button>
  );
}

export default Button