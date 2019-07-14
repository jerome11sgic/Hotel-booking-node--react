import React, { Component } from 'react';
import { connect } from "react-redux";

import * as actions from '../../actions';

class RentalDetail extends Component {
	componentWillMount() {
		//Dispatch action
		const rentalId = this.props.match.params.id;
		this.props.dispatch(actions.fetchRentalById(rentalId));
	}

	render() {
		const rental = this.props.rental;


		return (
			<div>
				<h1>{rental.title}</h1>
				<h2>{rental.city}</h2>
				<h2>{rental.description}</h2>
				<h2>{rental.dailyrate}</h2>
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		rental: state.rental.data
	}
}
export default connect(mapStateToProps)(RentalDetail);
