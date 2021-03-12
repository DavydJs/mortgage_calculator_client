import React, { Component } from 'react';
import './CreateNewBank.css'

export default 	class CreateNewBank extends Component { 
state = {
	bankName: "",
	maximumLoan: "",
	minimumDownPayment: "",
	loanTerm: "",
	interestRate: "",
	dollOrPer: "dollar",
};
onBankNameChange = (e) => {
        this.setState({
		     bankName: e.target.value })
			}
onMaximumLoan = (e) => {
	    this.setState({
		     maximumLoan: e.target.value })
		    }
onMinimumDownPayment = (e) => {
	    this.setState({
		     minimumDownPayment: e.target.value})
	        }
onLoanTerm = (e) => {
        this.setState({
		    loanTerm: e.target.value})
	        }
onInterestRate = (e) => {
		this.setState({
		    interestRate: e.target.value})
	        }
onDoll = (e) => {
	    this.setState({
			dollOrPer: e.target.value})
            }
onPer = (e) => {
	    this.setState({
				dollOrPer: e.target.value})
            }
onCreateNewBank = (e) => {
	e.preventDefault();
	this.props.addNewBank(this.state);
	this.setState({
		bankName: "",
		maximumLoan: "",
		minimumDownPayment: "",
		loanTerm: "",
		interestRate: "",
		dollOrPer: "dollar",
	});
}
onRefresh = (e) => {
	this.props.editBank(this.state);
    this.setState({
		bankName: "",
		maximumLoan: "",
		minimumDownPayment: "",
		loanTerm: "",
		interestRate: "",});
		e.preventDefault();
}
render() {
	const {index, editItem,data} = this.props;
	const toggleButton = editItem ? "Refresh" : "Create new bank";
	const transForm = editItem ? this.onRefresh : this.onCreateNewBank;
	const editedBank = data[index];
	const beforBankName = editItem ? editedBank.bankName : "Enter...";
	const beforMaximumLoan = editItem ? editedBank.maximumLoan : "Enter";
	const beforMinimumDownPayment = editItem ? editedBank.minimumDownPayment : "Enter";
	const beforLoanTerm = editItem ? editedBank.loanTerm : "Enter";
	const beforInterestRate = editItem ? editedBank.interestRate : "Enter";
			return (
			<div className = "wrap-create-new-bank-form">
				<form onSubmit = {transForm} action = "">
					<label htmlFor = "bankName"><p>Bank name</p></label>
					<p><input placeholder = {beforBankName} 
					          type="text" 
							  name = "bankName"
							  id = "bankName"
							  onChange = {this.onBankNameChange}
							  value = {this.state.bankName } 
							  required/></p>
					<label htmlFor = "maximumLoan"> <p>Maximum loan $</p></label>
					<p><input placeholder = {beforMaximumLoan} 
					          type = "number" 
							  name = "maximumLoan" 
							  id = "maximumLoan"
							  onChange = {this.onMaximumLoan}
							  value = {this.state.maximumLoan}
							  required/></p>
					<label htmlFor = "minimumDownPayment"> <p>Minimum down payment
				    <input    className = "doll" 
					          onChange = {this.onDoll}
						      type = "radio"
						      id = "dollar"
							  name = "bound" 
							  value = "dollar"
							  defaultChecked/>
                    <label    className = "margin-left"  htmlFor="dollar">$</label>
				    <input    className = "per"
					          onChange = {this.onPer}
					          type= "radio"
						      id= "percent"
							  name = "bound" 
					   	      value = "percent"/>
                    <label    className ="margin-left" htmlFor="percent">%</label></p></label>
					<p><input placeholder = {beforMinimumDownPayment}
					          type = "number"
							  name = "minimumDownPayment" 
							  id = "minimumDownPayment"
							  onChange = {this.onMinimumDownPayment}
							  value = {this.state.minimumDownPayment}
							  required/></p>
					<label htmlFor="loanTerm"> <p>Loan term </p></label>
					<p><input placeholder = {beforLoanTerm} 
					          type = "number"
							  name = "loanTerm"
						      id = "loanTerm"
							  onChange ={this.onLoanTerm}
							  value = {this.state.loanTerm}
							  required/></p>
					<label htmlFor = "interestRate"> <p>Interest rate %</p></label>
					<p><input placeholder = {beforInterestRate} 
					          type = "number" 
							  name = "interestRated"
							  id = "interestRate"
							  onChange = {this.onInterestRate}
							  value = {this.state.interestRate}
							  required/></p>
					<label htmlFor = "create">
					<p><input className = "btn btn-success" 
					          type = "submit" 
							  name = "create"
							  value = {toggleButton}/>
				    </p></label>
				</form>
			</div>)
   }
	 
}
