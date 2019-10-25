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
						<button
						onClick={() => this.changeView('newTask')} 
						className={this.props.view === "newTask" ? 'menu__link menu__link--active' : 'menu__link'} 
						>Create new task
						</button>
					</li>
          <li>
						<button 
						onClick={() => this.changeView('allTask')} 
						className={this.props.view === "allTask" ? 'menu__link menu__link--active' : 'menu__link'}  
						>All tasks
						</button>
					</li>
          <li>
						<button 
						onClick={() => this.changeView('pendingTask')} 
						className={this.props.view === "pendingTask" ? 'menu__link menu__link--active' : 'menu__link'} 
						>Pending tasks
						</button>
					</li>
          <li>
						<button 
						onClick={() => this.changeView('completedTask')} 
						className={this.props.view === "completedTask" ? 'menu__link menu__link--active' : 'menu__link'} 
						>Completed tasks
						</button>
					</li>
        </ul>
      </div>
		)
	}
}

export default Menu;