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
import { tasks, metrics, users } from './data/data';
import ProfilePic from './components/ProfilePic';
import Modal from './components/Modal';
import Button from './components/Button';


interface TasksProps {
	id: number;
	task: string;
	state: string;
	description: string;
	assignee: number;
}

interface MetricsProps {
	icon: string;
	rounded: boolean;
	smallText: string;
	largeText: string;
	textMainColor: boolean;
}

interface UsersProps {
	id: number;
	name: string;
	title: string;
	country: string;
	imgSrc: string;
	rounded: boolean;
}

function App():JSX.Element {
  	const [openNav, setOpenNav] = useState<boolean>(false);

	const [isSelected, setIsSelected] = useState<string>("Dashboard");

	const [usersData, setUsersData] = useState<UsersProps[]>(users)
	const [metricsData, setMetricsData] = useState<MetricsProps[]>(metrics)
	const [tasksData, setTasksData] = useState<TasksProps[]>(tasks)

	const [profilePic, setProfilePic] = useState<string>(
		"https://images.unsplash.com/photo-1542222721-4728992b54cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
	);

	const [modal, setModal] = useState(false);
	const openModal = () => setModal(true);
	const closeModal = () => setModal(false);

	const initialFormState = {
		task: "",
		description: "",
		assignee: "",
		state: "",
	}

	const [taskForm, setTaskForm] = useState(initialFormState)

	const setTaskFormData = (name:any, value:any) => {
		setTaskForm((prevState:any) => {
			return {...prevState, [name]: value}
		})
	}

	const handleSubmit = () => {
		setTasksData((prevState:any) => {
			return [taskForm, ...prevState]
		})
		setTaskForm(initialFormState)
		closeModal()
	}

  return (
		<div className="flex min-h-screen">
			<Modal modal={modal} closeModal={closeModal} setTaskFormData={setTaskFormData} handleSubmit={handleSubmit} taskForm={taskForm} setTaskForm={setTaskForm}/>

			<Button text={"Add Task"} outline={true} styling={"taskBtn"} functionName={openModal}/>

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
			{isSelected == "Dashboard" && <Dashboard 
			// data={data} 
			// setData={setData} 
			tasksData={tasksData} 
			setTasksData={setTasksData} 
			usersData={usersData} 
			setUsersData={setUsersData} 
			metricsData={metricsData} 
			setMetricsData={setMetricsData} />}
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
