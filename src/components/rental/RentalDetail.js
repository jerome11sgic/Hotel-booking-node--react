import React, { Component } from 'react'

export default class RentalDetail extends Component {
	render() {
		
		return (
			<div>
				<h1>rental details component {this.props.match.params.id}</h1>
				
			</div>
		)
	}
}
