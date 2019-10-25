import React from 'react';
import Task from './components/task';
import Menu from './components/menu';
import Form from './components/form';
import Modal from './components/modal';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			view : "newTask",
			modal: null,
			tasks: []
		}
	}

	newTask(data) {
		const newObject = {
			title: data.title, 
			description: data.description, 
			deadline: data.deadline, 
			created: data.created,
			pending: false
		}
		const currentTasks = this.state.tasks;
		currentTasks.push(newObject)
		this.setState({task: currentTasks});
	}

	renderTask(data) {
		return (
			<Task 
				changeCompleted={this.changePending.bind(this)}
				deleteTask={this.deleteTask.bind(this)}
				id={data.id}
				title={data.title} 
				description={data.description} 
				deadline={data.deadline}
				created={data.created}/>
		)
	}

	changePending(index) {
		const currentTasks = this.state.tasks;
		currentTasks[index].pending = !currentTasks[index].pending
		this.setState({task: currentTasks});
	}

	deleteTask(index) {
		const currentTasks = this.state.tasks;
		currentTasks.splice(index, 1)
		this.setState({task: currentTasks});
	}

	renderModal(emptyForm) {
		this.setState({
			modal: <Modal hideModal={this.hideModal.bind(this)} addNewTask={emptyForm()} changeView={this.changeView.bind(this)}/>
		});
	}

	hideModal() {
		this.setState({
			modal: null
		});
	}

	renderForm() {
		return (
			<Form 
				renderModal={this.renderModal.bind(this)}
				newTask={this.newTask.bind(this)}
			/>
		)
	}

	renderAllTasks() {
		let tasks = [];
		this.state.tasks.map((task, index) => {
			const dataTask = {
				id:index,
				title: task.title, 
				description: task.description, 
				deadline: task.deadline, 
				created: task.created,
			}
			tasks.push(this.renderTask(dataTask));
		});
		return (
			tasks
		)
	}

	renderPendingTasks() {
		let tasks = [];
		this.state.tasks.map((task, index) => {
			if (task.pending === false) {
				const dataTask = {
					id: index,
					title: task.title, 
					description: task.description, 
					deadline: task.deadline, 
					created: task.created,
				}
				tasks.push(this.renderTask(dataTask));
			}
		});
		return (
			tasks
		)
	}

	renderCompletedTasks() {
		let tasks = [];
		this.state.tasks.map((task, index) => {
			if (task.pending === true) {
				const dataTask = {
					id: index,
					title: task.title, 
					description: task.description, 
					deadline: task.deadline, 
					created: task.created,
				}
				tasks.push(this.renderTask(dataTask));
			}
		});
		return (
			tasks
		)
	}

	changeView(view) {
		this.setState({
			view: `${view}`
		});
	}

	getActiveView() {
		let view = null;

		if (this.state.view === "newTask") {
			view = this.renderForm();
		} else if (this.state.view === "allTask") {
			view = this.renderAllTasks();
		}else if (this.state.view === "pendingTask") {
			view = this.renderPendingTasks();
		}else if (this.state.view === "completedTask") {
			view = this.renderCompletedTasks();
		}

		return view;
	}

	render() {
		const content = this.getActiveView();
		const modal = this.state.modal;

		return (
			<div className="container">
				<Menu view={this.state.view} changeView={this.changeView.bind(this)}/>
				<div className="content">{content}</div>
				<div className={this.state.modal ? 'modal-container' : ''} >{modal}</div>
			</div>
		);
	}
}

export default App;
