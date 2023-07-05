import data from '../data/data';
import MetricCard from './MetricCard';
import SearchBar from './SearchBar'
import Table from './Table';

const Dashboard = ():JSX.Element => {
  return (
		<div className="w-full flex items-center flex-col gap-3">
			<SearchBar />
			<MetricCard data={data[0].metrics} component={"cards"} />
			<div className="flex w-full justify-around px-5 gap-5">
				<Table data={data[2].tasks} title={"Recent Tasks"} headers={["Task", "Asignee", "Status"]} />
				{/* <MetricCard
					data={data[2].tasks}
					title={"Recent Orders"}
					component={"table"}
				/> */}
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