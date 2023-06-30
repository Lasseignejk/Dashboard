import React from 'react'
import TableRow from './TableRow';

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
	data: TasksProps[] | undefined;
}

const Table = ({data, title, headers}:TableProps):JSX.Element => {
  return (
		<div className="flex flex-col w-2/3 shadow-lg rounded-2xl p-5">
			<h1 className="subHeader">{title}</h1>
			<table>
				<thead>
					{headers?.map((header) => (
						<th>{header}</th>
					))}
				</thead>
				<tbody>
					{data?.map((item) => (
						<tr className="border-b-2">
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