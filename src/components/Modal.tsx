import { FaTimes } from "react-icons/fa";
import Button from "./Button";
import Input from "./Input";

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
	setTaskForm: (obj: TaskFormProps) => void
}

const Modal = ({modal, closeModal, setTaskFormData, handleSubmit, taskForm, setTaskForm}:ModalProps):JSX.Element => {
	const initialFormState = {
		task: "",
		description: "",
		assignee: "",
		state: "",
	};

	const handleClose = () => {
		setTaskForm(initialFormState)
		closeModal()
	}

	const formInputs = [
		{type: "text", styling: "modal_input outline_none", placeholder: "task", name: "task", functionName: setTaskFormData, value: taskForm.task},

		{type: "text", styling: "modal_input outline_none", placeholder: "description", name: "description", functionName: setTaskFormData, value: taskForm.description},

		{type: "", styling: "modal_input outline_none", placeholder: "assignee", name: "assignee", functionName: setTaskFormData, value: taskForm.assignee},
	]

	// <input
	// 					className="modal_input outline-none"
	// 					type="text"
	// 					placeholder="description"
	// 					name="description"
	// 					onChange={(e) =>
	// 						setTaskFormData(e.target.name, e.target.value)
	// 					}
	// 					value={taskForm?.description}
	// 				/>
	// 				<input
	// 					className="modal_input outline-none"
	// 					type="text"
	// 					placeholder="assignee"
	// 					name="assignee"
	// 					onChange={(e) =>
	// 						setTaskFormData(e.target.name, e.target.value)
	// 					}
	// 					value={taskForm?.assignee}
	// 				/>

  return (
		<dialog
			open={modal}
			className="p-0 z-10 m-0 bg-transparentGray h-[100%] w-[100%]">
			<div className="mt-10 rounded-2xl relative bg-white w-[300px] h-[250px] m-auto">
				<span className="right-3 top-3 absolute hover:cursor-pointer text-xl" onClick={handleClose}>
				<FaTimes/>
				</span>
				<form className="flex flex-col gap-3 p-5 pt-10" method="dialog">
					{formInputs.map((input) => (
						<Input styling={input.styling} type={input.type} placeholder={input.placeholder} name={input.name} functionName={input.functionName} value={input.value} />
					))}

					{/* <input
						className="modal_input outline-none"
						type="text"
						placeholder="task"
						name="task"
						onChange={(e) =>
							setTaskFormData(e.target.name, e.target.value)
						}
						value={taskForm.task}
					/> */}
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
					
				<div className="flex gap-4 justify-center">

					<Button text={"Create"} outline={false} type={"submit"} functionName={handleSubmit}/>
					
				</div>
				</form>
			</div>
		</dialog>
  );
}

export default Modal