import React from 'react';

class Form extends React.Component  {
	constructor(props) {
    super(props);
    this.state = {
			newTodo : {
				title: null,
				description: null,
				deadline: null,
				created: null,
			}
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChange(event) {
		const { name, value } = event.target;
    this.setState({
        newTodo: Object.assign({}, this.state.newTodo, {
        [name]: value
        })
    });
	}

	// hacer un loop y hacer un solo setState 
	emptyForm() {
		this.setState({title: ""});
		this.setState({description: ""});
		this.setState({deadline: ""});
		this.setState({created: ""});
	}

  handleSubmit(event) {
		event.preventDefault();
		this.props.newTask({
			title: this.state.newTodo.title, 
			description: this.state.newTodo.description, 
			deadline: this.state.newTodo.deadline, 
			created: this.state.newTodo.created
		});
		this.props.renderModal(() => this.emptyForm.bind(this));
  }

  render() {
    return (
			<div className="form">
				<form onSubmit={this.handleSubmit}>
					<h2>Create New TODO</h2>
					<div className="form__item form__name">
						<label>Task name:</label>
						<input type="text" value={this.state.title} name="title" onChange={this.handleChange}/>
					</div>
					<div className="form__item form__dealine">
						<label>Deadline:</label>
						<input type="date" value={this.state.deadline} name="deadline" onChange={this.handleChange}/>
					</div>
					<div className="form__item form__created">
						<label>Time:</label>
						<input type="time" value={this.state.created} name="created" onChange={this.handleChange}/>
					</div>
					<div className="form__item form__description">
						<label>Task Description:</label>
						<textarea value={this.state.description} name="description" onChange={this.handleChange} />
					</div>
					<div className="form__item form__submit">
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
    );
  }
}

export default Form;