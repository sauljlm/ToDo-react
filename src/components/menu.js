import React from 'react';

class Menu extends React.Component  {
	constructor(props) {
		super(props);

		this.state = {
			listProperty: [
				{
					view: "newTask",
					name:  "Create new task"
				},
				{
					view: "allTask",
					name:  "All tasks"
				},
				{
					view: "pendingTask",
					name:  "Pending tasks"
				},
				{
					view: "completedTask",
					name:  "Completed tasks"
				}
			]
		}
	}

	changeView(view) {
		this.props.changeView(view);
	}

	render() {
		return (
			<div className="menu">
        <ul className="menu__cont">
					{this.state.listProperty.map(item => {
						return(
							<li>
								<button
									onClick={() => this.changeView(item.view)} 
									className={this.props.view === (item.view) ? 'menu__link menu__link--active' : 'menu__link'} >
									{item.name}
								</button>
							</li>
						)
					})}
        </ul>
      </div>
		)
	}
}

export default Menu;