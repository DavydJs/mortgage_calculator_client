import React from 'react';

const RowTable = ({renderTable}) => {
    return (    
                <tr key = {renderTable.key}>
                    <td>{renderTable.month}</td>
                    <td>{renderTable.totalPayment}</td>
                    <td>{renderTable.interestPayment.toFixed(2)}</td> 
                    <td>{renderTable.loanBalance.toFixed(2)}</td>
                    <td>{renderTable.equity.toFixed(2)}</td>
                </tr>
    )

}

export default RowTable;