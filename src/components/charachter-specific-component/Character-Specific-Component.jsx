import React from 'react';

export default class CharacterSpecificComponent extends React.Component {
	render() {
		return (
			<div className="[ row ]">
				<div className="[ col-sm-4 ]">
					<img src={this.props.image}/>
				</div>
				<div className="[ col-sm-4 ]">
					<h2>
						{this.props.name}
					</h2>
					<p>{this.props.species}</p>
					<p>{this.props.status}</p>
				</div>
			</div>
		);
	}
}
