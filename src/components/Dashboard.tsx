import MetricCard from './MetricCard';
import SearchBar from './SearchBar'
import Table from './Table';

interface DataProps {
	metrics?: MetricsProps[];
	users?: UsersProps[];
	tasks?: TasksProps[];
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

interface TasksProps {
	id: number;
	task: string;
	state: string;
	description: string;
	assignee: number;
}

interface DashboardProps {
	data: DataProps[],
	setData: (item: object[]) => void
}

const Dashboard = ({data, setData}:DashboardProps):JSX.Element => {
  return (
		<div className="w-full flex items-center flex-col gap-4">
			<SearchBar />
			<MetricCard data={data[0].metrics} component={"cards"} />
			<div className="flex w-full justify-around px-5 gap-5 h-full py-5">
				<Table data={data[2].tasks} title={"Recent Tasks"} headers={["Task", "Asignee", "Status"]} />
				
				<MetricCard
					data={data[1].users}
					title={"Recent Customers"}
					component={"side"}
				/>
			</div>
		</div>
  );
}

export default Dashboard