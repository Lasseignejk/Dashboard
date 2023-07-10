interface TaskFormProps {
	task: string,
	description: string,
	assignee: string,
	state: string
}

interface ModalProps {
    modal: boolean;
    closeModal: () => void;
	setTaskFormData: (name:any, value:any) => void;
	handleSubmit: () => void;
	taskForm: TaskFormProps
}

const Modal = ({modal, closeModal, setTaskFormData, handleSubmit, taskForm}:ModalProps):JSX.Element => {
  return (
		<dialog
			open={modal}
			className="p-0 z-10 bg-transparentGray h-screen w-screen">
			<div className="mt-10 rounded-2xl bg-white w-[300px] h-[250px] m-auto">
				<div className="flex flex-col gap-3 p-5">
					<input
						className="modal_input outline-none"
						type="text"
						placeholder="task"
						name="task"
						onChange={(e) =>
							setTaskFormData(e.target.name, e.target.value)
						}
						value={taskForm.task}
					/>
					<select
						name="state"
						onChange={(e) =>
							setTaskFormData(e.target.name, e.target.value)
						}
						value={taskForm?.state}
						id="">
						<option value="">Please select one</option>
						<option value="Scheduled">Scheduled</option>
						<option value="Pending">Pending</option>
						<option value="In Progress">In Progress</option>
						<option value="Completed">Completed</option>
					</select>
					<input
						className="modal_input outline-none"
						type="text"
						placeholder="description"
						name="description"
						onChange={(e) =>
							setTaskFormData(e.target.name, e.target.value)
						}
						value={taskForm?.description}
					/>
					<input
						className="modal_input outline-none"
						type="text"
						placeholder="assignee"
						name="assignee"
						onChange={(e) =>
							setTaskFormData(e.target.name, e.target.value)
						}
						value={taskForm?.assignee}
					/>
				</div>
				<div className="flex gap-4 justify-center">
					<button onClick={handleSubmit} className="filled_button">
						Create
					</button>
					<button className="outline_button" onClick={closeModal}>
						Close
					</button>
				</div>
			</div>
		</dialog>
  );
}

export default Modal