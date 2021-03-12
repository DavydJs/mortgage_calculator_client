import React, { Component } from 'react';
import HistoryBank from '../HistoryBank';
import './HistoryCalculation.css';
export default class HistoryCalculation  extends Component{
render() {
     const {onBackHistory,historyBanks} = this.props;
const history = historyBanks.map((bank) => {
const {key,...banks} = bank
return <div key = {key}> <HistoryBank bank = {banks}/></div>});

  
    return (<div>
               <div className = "history"> 
                    <p>History</p>
                     <div>{history}</div>
               </div>
                     <button className = "btn btn-danger left"
                             onClick = {onBackHistory}> Back
                          <i className="fas fa-hand-point-left ic"></i></button>
              </div>)
}

 }
   
     
   
