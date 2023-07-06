import './App.css'
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav/Nav";
import Customers from "./components/Customers";
import Message from "./components/Message";
import Help from "./components/Help";
import Settings from "./components/Settings";
import Password from "./components/Password";
import SignOut from "./components/SignOut";
import { useState } from "react";
import Hamburger from "./components/Nav/Hamburger";
import taskData from "./data/data";
import ProfilePic from './components/ProfilePic';

function App():JSX.Element {
  	const [openNav, setOpenNav] = useState<boolean>(false);
	const [isSelected, setIsSelected] = useState<string>("Dashboard");
	const [data, setData] = useState<object[]>(taskData)
	const [profilePic, setProfilePic] = useState<string>(
		"https://images.unsplash.com/photo-1542222721-4728992b54cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
	);

  return (
		<div className="flex min-h-screen">
			<ProfilePic profilePic={profilePic} setProfilePic={setProfilePic} />
			<div className="flex">
				<Nav
					openNav={openNav}
					setOpenNav={setOpenNav}
					isSelected={isSelected}
					setIsSelected={setIsSelected}
				/>
				<Hamburger openNav={openNav} setOpenNav={setOpenNav} />
			</div>
			{isSelected == "Dashboard" && <Dashboard data={data} setData={setData} />}
			{isSelected == "Customers" && <Customers />}
			{isSelected == "Message" && <Message />}
			{isSelected == "Help" && <Help />}
			{isSelected == "Settings" && <Settings />}
			{isSelected == "Password" && <Password />}
			{isSelected == "Sign Out" && <SignOut />}
		</div>
  );
}

export default App
