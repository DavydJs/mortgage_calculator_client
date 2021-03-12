import React, { Component } from 'react';
import RowTable from '../RowTable';
import './Table.css';

export default class Table extends Component {
    
    
 render() {
 const {renderTable,onBackTable} = this.props;
 const rowsTable = renderTable.map((item) => {
		return (
					<RowTable key = {item.key}
                    renderTable = {item}
					      />)});	
 return (
      <div className = "tab"> 
       <table className = "table table-dark table-striped">
        <caption>Mortgage calculator</caption>
            <thead>   
                <tr>
                    <th>Month</th>
                    <th>Total Payment</th>
                    <th>Interest Payment</th>
                    <th>Loan balance</th>
                    <th>Equity</th>
                </tr>
            </thead>
            <tbody>
             {rowsTable}
            </tbody>
       </table>               
               <button className = "btn btn-danger left"
                        onClick = {onBackTable}> Back
               <i className="fas fa-hand-point-left ic"></i></button>
    </div>)
         }
}
