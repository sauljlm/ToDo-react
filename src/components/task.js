import React from 'react';
import Title from './title';
import Paragraph from './paragraph';

class Task extends React.Component  {
	constructor(props) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<div className="task">
				<div className="task__header">
					<Title className="task__title" title={this.props.title}/>
					<button onClick={() =>this.props.changeCompleted(this.props.id)} className="task__btn-complete">✓</button>
					<button onClick={() =>this.props.deleteTask(this.props.id)} className="task__btn-delete">x</button>
				</div>
				<div className="task__content">
					<div className="task__desc-container">
						<span>Description: </span>
						<Paragraph className="task__description" text={this.props.description}/>
					</div>
					<div className="task__container-dealine">
						<span>Deadline: </span>
						<Paragraph className="task__dealine" text={this.props.deadline}/>
					</div>
					<div className="task__container-created">
						<span>Task Created: </span>
						<Paragraph className="task__created" text={this.props.created}/>
					</div>
				</div>
			</div>
		)
	}
}

export default Task;