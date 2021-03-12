import React from 'react';
import Bank from '../Bank';
import './MyBanks.css';
const MyBanks = ({data,onRemoved,onEdit,onHistory,isEmpty})=>{
	const style = isEmpty ? "desc" : "banks";
	const desc = `You haven't created any banks yet! Please create your first bank`;
	const banks = data.map((item) => {
    const {id,...itemProps} = item;
		return (
				<div key = {id}>
					<Bank {...itemProps}
					      onEdit = {() => onEdit(id)}
					      onRemoved = {() => onRemoved(id)}
						  onHistory = {onHistory}/>
				</div>
		)});	
	return( 
			<div className = {style}>
				{isEmpty ? desc : banks}
			</div>
		
	);
}
export default MyBanks;