import React, { Component } from 'react';
import './MortgageCalculator.css'
export default class MortgageCalculator extends Component{
optionId = 200;
state = {
	initialLoan: "",
	downPayment: "",
	bank: "",


};
onInitialLoan = (e) => {
	this.setState({
		 initialLoan: e.target.value})
	        }
onDownPayment = (e) => {
    this.setState({
		 downPayment: e.target.value })
	        }
onBank = (e) => {
    this.setState({
		 bank: e.target.value})
	       }
onSubmit = (e) => {
	
	const {listPrepareBanks} = this.props;
	const selectedBank = listPrepareBanks.findIndex((bank) => bank.bankName === this.state.bank);
	this.props.constructorTable(listPrepareBanks[selectedBank].bankName,
		                        listPrepareBanks[selectedBank].interestRate,
		                        listPrepareBanks[selectedBank].loanTerm,
								this.state.initialLoan,this.state.downPayment);
this.setState({
	initialLoan: "",
	downPayment: "",
	bank: "",
});
e.preventDefault();
}

render() {
	const {listPrepareBanks} = this.props;
	const options = listPrepareBanks.map((item) => {
    if ( this.state.downPayment  >= item.minimumDownPayment ) {
		this.optionId ++;
		const {bankName} = item;
		return (<option key = {this.optionId} value={bankName}></option>)
	} 
        return null;
	});

	return (  <div className ="wrap-mortgage-culc-form">
			<form onSubmit ={this.onSubmit} action="">
				<label htmlFor="initialLoan"> <p>Initial loan $</p></label>
				<p><input placeholder="Enter..."
						  type="number"
						  name="initialLoan" 
						  id="initialLoan"
						  onChange ={this.onInitialLoan}
						  value = {this.state.initialLoan}
						  required/></p>
				<label htmlFor="downPayment"> <p>Down payment $</p></label>
				<p><input placeholder="Enter..."
						  type="number" 
						  name="downPayment" 
						  id="downPayment"
						  onChange ={this.onDownPayment}
						  value = {this.state.downPayment}
						  required/></p>
				<label htmlFor="bank"> <p>Bank</p></label>
				<p><input list="banks" placeholder = "Enter" //{listPrepareBanks.length === 0 ? "Enter" : listPrepareBanks.map((item) => item.bankName)} 
				          type="text"
						  name="bank" 
						  id="bank"
						  onChange ={this.onBank}
						  value = {this.state.bank}
						  required/></p>
				<datalist autoComplete ="off" id="banks">
					{ options }
				</datalist>
				<label htmlFor="calculation"><p><input className = "btn btn-info" 
				                                       type="submit" 
													   name="calculation" 
													   value="Calculation" 
													   id="calculation"/></p></label>
	        </form>
	     </div>)}
	 
}
