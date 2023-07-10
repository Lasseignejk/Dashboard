import React from 'react'
import TableRow from './TableRow';
import Button from './Button';

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

interface TableProps {
	title: string;
    headers?: string[];
	data: TasksProps[];
}

const Table = ({data, title, headers}:TableProps):JSX.Element => {
  return (
		<div className="flex flex-col w-2/3 box_shadow rounded-2xl p-5">
			<div className="flex justify-between items-start">
				<h1 className="subHeader pb-5">{title}</h1>
				<Button text={"View All"} outline={false} styling={"text-sm"} />
			</div>
			<table>
				<thead>
					<tr>
						{headers?.map((header) => (
							<th id={header}>{header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data?.map((item) => (
						<tr className="border-b-[1px]">
							<TableRow
								text={item.task}
								centered={false}
								column={"task"}
							/>
							<TableRow
								text={item.assignee}
								centered={true}
								column={"assignee"}
							/>
							<TableRow
								text={item.state}
								centered={false}
								column={"status"}
							/>
						</tr>
					))}
				</tbody>
			</table>
		</div>
  );
}

export default Table