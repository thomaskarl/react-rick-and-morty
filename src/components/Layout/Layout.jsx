import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Layout extends React.Component {
	render() {
		return (
			<div className="[ container ]">
				<nav class="[ header ]">
					<NavLink to="/">
						<img src="https://www.freeiconspng.com/uploads/rick-and-morty-beige-folder-icon-1.png" alt="Rick and Morty"/>
					</NavLink>
				</nav>
				<div className="[ row ]">
					<div className="[ col-sm-12 ]">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}
