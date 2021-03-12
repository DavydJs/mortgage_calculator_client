import React, { Component } from 'react';
import CreateNewBank from '../CreateNewBank';
import MortgageCalculator from '../MortgageCalculator';
import MyBanks from '../MyBanks';
import HomePage from '../HomePage';
export default class App extends Component {
historyKey = 150;
rowTableKey = 100;
editId = 50;
state = {
	maxId: 0,
	banksData :[],
	isEmpty:true,
	editItem: false,
	index: null,
	toggleScreen: 0,
	listPrepareBanks: [],
	renderTable: [],
	historyBanks: [],
}

onHistory = () => this.setState({toggleScreen: 1,})
onBackHistory = () => this.setState({toggleScreen: 0,});
onBackTable = () => {
	const history = this.state.renderTable;
	const lastRendTable = history.length-1;
	const currentTime = new Date();
	const addHistoryBank = {
		key: this.historyKey,
		bankName: history[lastRendTable].bankName, 
		date: currentTime,
		month: history[lastRendTable].month,
		totalPayment: history[lastRendTable].totalPayment,
		equity: history[lastRendTable].equity,
	};
	const { historyBanks} = this.state;
	const newArray =[...historyBanks,
		addHistoryBank,];
	this.setState({
        historyBanks: newArray,
	   toggleScreen: 0, });
	this.historyKey ++;
}
listPrepareBanks = (bank) => {
	const minimumDownPayment = (bank) => {
		if (bank.dollOrPer !== "dollar") {
		const prepareMinimumDownPayment = ( bank.maximumLoan * bank.minimumDownPayment) / 100 ;
        const preparedBank = {...bank};
		preparedBank.minimumDownPayment = prepareMinimumDownPayment;
		return preparedBank;
		}
		return bank;
	}
	const preparedBank = [...this.state.listPrepareBanks,
	                      minimumDownPayment(bank),];
	this.setState({
		listPrepareBanks: preparedBank,
	});


}
monthlyPayment = (r,n,p) => { // r-annual interest rate, n-number of monthly payment, p-amount borrowed
	const anItRate = (r,n) => {
		return Math.pow( r / 100 / 12 + 1, n);
	}
	const itRate = (r/100) / 12;
	const monthlyPayment = p * itRate * anItRate(r,n) / (anItRate(r,n) -1);
 return Math.floor(monthlyPayment * 100) / 100;
}
createRowTable = (bankName,key, month, totalPayment,interestPayment,loanBalance, equity) => {
	return {
		bankName,
        key,
		month,
	    totalPayment,
		interestPayment,
		loanBalance,
		equity,}
}
constructorTable = (bankName,iR,lT,iL,dP) => {
	this.setState({toggleScreen: 2,});
	const interestRate = parseInt(iR);
	const loanTerm = parseInt(lT);
	const initialLoan = parseInt(iL);
	const downPayment= parseInt(dP);
	let amountBorrowed = initialLoan;
	const monthlyPayment = this.monthlyPayment(interestRate,loanTerm,initialLoan);
    const createdTable = [];
	const interestPayment = (interestRate,amountBorrowed) => {
		return this.monthlyPayment(interestRate,1,amountBorrowed) - amountBorrowed;}
	const loanBalance = (amountBorrowed,interestRate) => {
		return (amountBorrowed + interestPayment(interestRate,amountBorrowed)) - monthlyPayment ;}
	const equityPrepare = () =>  monthlyPayment - interestPayment(interestRate,amountBorrowed);
	let equity = equityPrepare() + downPayment;

	  for ( let i = 0; i <= loanTerm - 1; i++) {
			createdTable.push(this.createRowTable(bankName,this.rowTableKey,i+1,monthlyPayment,
				                                interestPayment(interestRate,amountBorrowed),
												loanBalance(amountBorrowed,interestRate),equity));
			this.rowTableKey++;
			amountBorrowed = loanBalance(amountBorrowed,interestRate);
			equity += equityPrepare();
			};

this.setState({renderTable: createdTable,});
}
removeItem = (id) => { 
	this.setState(({banksData}) => { 
		const index = banksData.findIndex((el) => el.id === id);
		const newArray = [...banksData.slice(0,index),
		                  ...banksData.slice(index+1)];
    let countBanks = --this.maxId;
	const isEmpty = countBanks === 0 ? true : false;
			return {
			banksData : newArray,
			isEmpty,
		    editItem: false,
		    toggleScreen: 0,}
		
        })
}
createNewBank ({bankName,maximumLoan,minimumDownPayment,loanTerm,interestRate}) {
	return {
		id: this.state.maxId,
		bankName,
	    maximumLoan,
	    minimumDownPayment,
	    loanTerm,
        interestRate,
	}
}
addedNewBank = (bank) => {
	const newBank = this.createNewBank(bank);
	    this.setState(({banksData}) => {
		const newArray = [
			...banksData,
			newBank
		];
        return {
			maxId: this.state.maxId + 1,
			banksData: newArray,
			 isEmpty: false,
		}
	})
this.listPrepareBanks(bank);

}
editItem = (id) => {
	const index = this.state.banksData.findIndex((el) => el.id === id);
    this.setState(
		{
		index: index,
		editItem: true,
	})
}
editBank = (editedBank) => {
	const id = editedBank;
	id.id = this.editId++;
	const {banksData,index} = this.state;
	const newArray = [...banksData.slice(0,index),
		              editedBank,
	                  ...banksData.slice(index+1)];
this.setState({ 
	banksData :newArray,
	isEmpty:false,
	editItem: false,
	index: undefined,})
}
render() {this.receiveState();
	     return (<div>
				<MyBanks data = {this.state.banksData}
				         isEmpty = {this.state.isEmpty}
				         onRemoved = {this.removeItem}
						 onEdit = {this.editItem}
						 onHistory = {this.onHistory}/>
				<CreateNewBank addNewBank = {this.addedNewBank}
				               editBank = {this.editBank} 
				               data = {this.state.banksData}
							   index = {this.state.index}
							   editItem = {this.state.editItem}
							   />
				<MortgageCalculator data ={this.state.banksData}
				                    listPrepareBanks = {this.state.listPrepareBanks}
									constructorTable = {this.constructorTable}/>
				<HomePage renderTable = {this.state.renderTable}
				        toggleScreen = {this.state.toggleScreen}
						onBackTable = {this.onBackTable}
						onBackHistory = {this.onBackHistory}
						historyBanks = {this.state.historyBanks}/>
			</div>);	
}
}

