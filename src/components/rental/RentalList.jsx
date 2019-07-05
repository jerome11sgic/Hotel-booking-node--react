import React, { Component } from "react";
import { RentalCard } from "../rental/RentalCard";
import { connect } from "react-redux";

import * as actions from '../../actions';

class RentalList extends React.Component {

  componentWillMount() {
    this.props.dispatch(actions.fetchRentals())
  }

  renderRentals() {

    return this.props.rentals.map((rental, index) => {
      console.log(rental);
      return (
        <RentalCard
          key={index}
          colNum='col-md-3 col-xs-6'
          rental={rental} />)

    });
  }

  render() {
    return (
      <section id="rentalListing">
        <h1 className="page-title"> Your Home All Around the World</h1>
        <div className="row">
          {this.renderRentals()}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    rentals: state.rentals.data
  }
}

export default connect(mapStateToProps)(RentalList);
