import { ReactNode } from "react";
import CardImage from "./CardImage";

interface SmallCardProps {
	largeText?: string;
	smallText?: string;
	icon?: ReactNode;
	imgSrc?: string;
	altText?: string;
	rounded?: boolean;
	textMainColor?: boolean;
	name?: string;
	country?: string;
	title?: string;
	task?: string;
	state?: string;
	assignee?: number;
	id?: number;
	component?: string;
}

const SmallCards = ({imgSrc, altText, rounded, largeText, smallText, icon, textMainColor, name, country, title, task, state, assignee, id, component}:SmallCardProps): JSX.Element => {

	const largeTextClasses = textMainColor ? "text-3xl text-regalBlue font-semibold" : "font-bold"

	const smallTextClasses = textMainColor ? "text-sm text-gray-400" : "text-[14px] text-gray-400"

	const containerClasses = title
		? "flex items-center gap-3 p-2 smallCard duration-200 ease-in"
		: "flex justify-between items-center shadow-lg p-5 rounded-2xl w-[180px] smallCard duration-200 ease-in";

	return (
		<div className={containerClasses}>

			{/* image component */}
			{rounded && <CardImage imgSrc={imgSrc} rounded={rounded} />}

			<div className={``}>

				{/* large text */}
				<h1 className={largeTextClasses}>{largeText ? largeText : name}</h1>

				{/* small text */}
				<h2 className={smallTextClasses}>{smallText ? smallText : country}</h2>
			</div>

			{/* icon */}
			{icon && !imgSrc && component !== "table" && <CardImage icon={icon} />}
		</div>
	);
};

export default SmallCards;
