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
		: "flex justify-between items-center box_shadow p-5 rounded-2xl min-w-[180px] grow max-w-[210px] smallCard duration-200 ease-in";

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
			{component == "table" && (
				<div className="flex justify-between w-full py-2 border-b-2">
					<p className="w-1/2">{task}</p>
					<p className="w-1/4">{assignee}</p>
					<p className={`px-1 rounded-md w-1/4 text-center text-white ${state == "In Progress" && "bg-blue-500"} ${state == "Pending" && "bg-yellow-500"} ${state == "Completed" && "bg-green-500"} ${state == "Scheduled" && "bg-purple-500"}`}>{state}</p>
				</div>
			)}
		</div>
	);
};

export default SmallCards;
