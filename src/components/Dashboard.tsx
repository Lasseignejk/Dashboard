import MetricCard from './MetricCard';
import SearchBar from './SearchBar'
import Table from './Table';

interface UsersProps {
	id: number;
	name: string;
	title: string;
	country: string;
	imgSrc: string;
	rounded: boolean;
}

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

interface DashboardProps {
	// data: DataProps[],
	// setData: (item: object[]) => void,
	tasksData: TasksProps[],
	setTasksData: (item: TasksProps[]) => void
	usersData: UsersProps[],
	setUsersData: (item: UsersProps[]) => void
	metricsData: MetricsProps[],
	setMetricsData: (item: MetricsProps[]) => void
}

const Dashboard = ({tasksData, setTasksData, usersData, setUsersData, metricsData, setMetricsData}:DashboardProps):JSX.Element => {
  return (
		<div className="w-full flex items-center flex-col gap-4">
			<SearchBar />
			<MetricCard data={metricsData} component={"cards"} />
			<div className="flex w-full justify-around px-5 gap-5 h-full py-5">
				<Table data={tasksData} title={"Recent Tasks"} headers={["Task", "Asignee", "Status"]} />
				
				<MetricCard
					data={usersData}
					title={"Recent Customers"}
					component={"side"}
				/>
			</div>
		</div>
  );
}

export default Dashboard