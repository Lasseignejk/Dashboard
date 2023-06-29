import { ReactNode } from "react";

interface ImageProps {
    imgSrc?: string,
    altText?: string,
    rounded?: boolean,
    icon?: ReactNode
}

const CardImage = ({imgSrc, altText, rounded, icon}:ImageProps):JSX.Element => {
    const imgClasses = rounded ? "rounded-full h-10 w-10 object-cover" : "rounded-lg h-10"
  return (
		<>
			{imgSrc && <img src={imgSrc} alt={altText} className={imgClasses} />}
      {!imgSrc && <span className="text-4xl text-gray-400">{icon}</span>}
		</>
  );
}

export default CardImage