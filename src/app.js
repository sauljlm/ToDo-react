import React from 'react';
import Task from './components/task';
import Menu from './components/menu';
import Form from './components/form';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			view : "newTask",
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
		this.setState(state => {
      state.tasks.push(newObject);
		});
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
		this.setState(() => {
			this.state.tasks[index].pending = !this.state.tasks[index].pending
		});
	}

	deleteTask(index) {
		this.setState(() => {
			this.state.tasks.splice(index, 1)
		});
	}

	renderForm() {
		return (
			<Form 
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

		return (
			<div className="container">
				<Menu changeView={this.changeView.bind(this)}/>
				<div className="content">{content}</div>
			</div>
		);
	}
}

export default App;
