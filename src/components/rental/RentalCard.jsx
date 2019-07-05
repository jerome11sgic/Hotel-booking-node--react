import React from 'react'
import { Link } from 'react-router-dom';

export function RentalCard(props) {
  const rental = props.rental;
  
  
  
	return (	
    <div className={props.colNum}>
      <Link to={`/rentals/${rental.id}`}>
              <div className="card bwm-card">
                <img className="card-img-top" 
                  src ="http://via.placeholder.com/350x250"/>
                <div className="card-block">
          <h6 className="card-subtitle"> {rental.shared ? 'shared' : 'whole'} {rental.catergory} &#183; {rental.city} </h6>
          <h4 className="card-title">{rental.title}</h4>
          <p className="card-text">${rental.dailyRate}  per Night &#183; Free Cancellation</p>
                  <a href ="" className="card-link"> More Info</a>
                </div>
        </div>
        </Link>
            </div>
		
	)
}
