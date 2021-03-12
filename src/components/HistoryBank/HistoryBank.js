import React from 'react';
import "./HistoryBank.css";
const HistoryBank = ({bank}) => {
    console.log("!!!!",bank);
     return (<div className = "history-bank" key = {bank.key}>
            <span>Bank name:{bank.bankName}</span>
            <span>Date:{bank.date.toLocaleString()}</span>
            <span>Month:{bank.month}</span>
            <span>Total Payment:{bank.totalPayment.toFixed(2)}</span>
            <span>Equity:{bank.equity.toFixed(2)}</span>
       </div>);
}
export default HistoryBank;