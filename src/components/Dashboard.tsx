import MetricCard from './MetricCard';
import SearchBar from './SearchBar'

const Dashboard = ():JSX.Element => {
  return (
		<div className="w-full flex items-center flex-col">
			<SearchBar />
			<MetricCard />
		</div>
  );
}

export default Dashboard