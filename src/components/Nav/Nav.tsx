import NavLink from "./NavLink"
import logo from "../../assets/logo.png"
import {FaChartLine, FaCog, FaComments, FaLock, FaQuestion, FaSignOutAlt, FaUsers} from "react-icons/fa"

interface NavProps {
	openNav: boolean;
	setOpenNav: (bool: boolean) => void;
	isSelected: string;
	setIsSelected: (str: string) => void;
}


const Nav = ({openNav, setOpenNav, isSelected, setIsSelected}:NavProps):JSX.Element => {
    const handleItemClick = (itemName:string):void => {
        setIsSelected(itemName)
        }
    const links = [
        {name: "Dashboard", icon: <FaChartLine />},
        {name: "Customers", icon: <FaUsers />},
        {name: "Message", icon: <FaComments/>},
        {name: "Help", icon: <FaQuestion />},
        {name: "Settings", icon: <FaCog />},
        {name: "Password", icon: <FaLock />},
        {name: "Sign Out", icon: <FaSignOutAlt />},
    ]
  return (
		<nav
			className={`w-[80px] h-screen bg-regalBlue pl-3 duration-200 ease-in ${
				openNav ? "active" : ""
			}`}>
			<div className="flex flex-col gap-5">
				<div className="flex gap-5 pt-3 pl-1">
					<img src={logo} alt="" className="w-10" />
					<h1
						className={`text-white text-2xl ${
							openNav ? "" : "hidden"
						}`}>
						Konoha
					</h1>
				</div>
				<div className="flex flex-col gap-5">
					{links.map((link, index) => (
						<NavLink
							link={link}
							key={index}
							openNav={openNav}
							setOpenNav={setOpenNav}
                            isSelected={isSelected}
                            setIsSelected={setIsSelected}
                            handleItemClick={handleItemClick}
						/>
					))}
				</div>
			</div>
		</nav>
  );
}

export default Nav