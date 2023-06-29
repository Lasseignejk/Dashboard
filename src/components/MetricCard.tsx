import { ReactNode } from 'react';
import SmallCards from './SmallCards'
import { FaEye, FaShoppingCart, FaComments, FaMoneyBill } from 'react-icons/fa';

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

interface MetricCardProps {
	title?: string;
  component?: string;
	data: (MetricsProps | UsersProps | TasksProps)[] | undefined;
}

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
  task?: string;
  state?: string;
  assignee?: number;
  id?: number
  component?: string;
}

const MetricCard = ({title, data, component}:MetricCardProps):JSX.Element => {
  const icons = [<FaEye/>, <FaShoppingCart />, <FaComments />, <FaMoneyBill />]

  const cardClasses = "flex gap-5"
  const tableClasses = "flex flex-col w-2/3 shadow-lg rounded-2xl p-5";
  const sideClasses = "flex flex-col w-1/3 shadow-lg rounded-2xl p-5";
    
  return (
		<div className={`${component == "cards" && cardClasses} ${component == "table" && tableClasses} ${component == "side" && sideClasses}`}>
      {title && <h1 className='subHeader'>{title}</h1> }
      
			{data!.map((card:SmallCardProps, index:number) => (

					<SmallCards {...card} key={index} icon={icons[index]} title={title} component={component} />
			))}
		</div>
  );
}

export default MetricCard