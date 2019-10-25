import React from 'react';

class Menu extends React.Component  {
	constructor(props) {
		super(props);

		this.state = {}
	}

	changeView(view) {
		this.props.changeView(view);
	}
	
	render() {
		return (
			<div className="menu">
        <ul className="menu__cont">
          <li>
						<a
						onClick={() => this.changeView('newTask')} 
						className={this.props.view === "newTask" ? 'menu__link menu__link--active' : 'menu__link'} 
						href="#">Create new task
						</a>
					</li>
          <li>
						<a 
						onClick={() => this.changeView('allTask')} 
						className={this.props.view === "allTask" ? 'menu__link menu__link--active' : 'menu__link'}  
						href="#">All tasks
						</a>
					</li>
          <li>
						<a 
						onClick={() => this.changeView('pendingTask')} 
						className={this.props.view === "pendingTask" ? 'menu__link menu__link--active' : 'menu__link'} 
						href="#">Pending tasks
						</a>
					</li>
          <li>
						<a 
						onClick={() => this.changeView('completedTask')} 
						className={this.props.view === "completedTask" ? 'menu__link menu__link--active' : 'menu__link'} 
						href="#">Completed tasks
						</a>
					</li>
        </ul>
      </div>
		)
	}
}

export default Menu;