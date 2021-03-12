import React, { Component } from 'react';
import './Bank.css';
export default class Bank extends Component {
render() {
	const {bankName, onRemoved,onEdit,onHistory} = this.props;
	return(
		<div className ="wrap-bank">
			<p><i className="fas fa-hand-holding-usd icon"></i>
			<span> {bankName }</span></p>
			<button onClick = {onHistory} className = "btn btn-outline-info">History</button>
			<button onClick = {onEdit} className = "btn btn-outline-warning">Edit</button>
			<button onClick = {onRemoved} 
				    className = "btn btn-outline-danger">Remove</button>
		</div>);
		}
}
