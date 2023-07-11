import { ReactNode } from "react";

interface NavProps {
	openNav: boolean;
	setOpenNav: (bool: boolean) => void;
	isSelected: string;
	setIsSelected: (str: string) => void;
}

type Link = {
	name: string,
	icon: ReactNode
}

interface NavLinkProps extends NavProps {
	link: Link
	handleItemClick: (str:string) => void
}

const NavLink = ({
	link,
	openNav,
	// setOpenNav,
	isSelected,
	// setIsSelected,
	handleItemClick,
}:NavLinkProps): JSX.Element => {
	return (
		<div
			className={`text-white flex relative items-center rounded-l-full hover:cursor-pointer hover:font-bold gap-3 nav_link duration-200 transition ease-in ${
				isSelected === link.name ? "selected" : ""
			} `}
			onClick={() => handleItemClick(link.name)}>
			<span className="m-2 w-6 text-2xl">{link.icon}</span>
			<p
				className={`text-white  w-full flex items-center pl-4 gap-3 h-10 hover:text-regalBlue ${
					isSelected === link.name ? "selected" : ""
				} ${openNav ? "flex h-10" : "hidden"}`}>
				{link.name}
			</p>
		</div>
	);
};

export default NavLink;
