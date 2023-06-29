import { ReactNode } from "react";
import CardImage from "./CardImage";


interface ImageProps {
	imgSrc: string;
	altText?: string;
	rounded: boolean;
}

// these are all optional because it'll depend on what the components further on require
interface SmallCardProps {
    largeText?: string,
    smallText?: string,
    icon?: ReactNode,
    imgSrc?: string,
    altText?: string,
    rounded?: boolean
}

const SmallCards = ({imgSrc, altText, rounded, largeText, smallText, icon}:SmallCardProps): JSX.Element => {
	return (
		<div className="flex gap-3 items-center">
			{/* image component */}
			{rounded && <CardImage imgSrc={imgSrc} rounded={rounded} />}
			<div className="">
				{/* large text */}
				<h1 className="text-4xl">{largeText}</h1>
				{/* small text */}
				<h2>{smallText}</h2>
			</div>
			{/* icon */}
			{icon && <CardImage icon={icon} />}
		</div>
	);
};

export default SmallCards;
