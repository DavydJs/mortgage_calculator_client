import React, { Component } from 'react';
import Table from '../Table';
import MainPage from '../MainPage';
import HistoryCalculation from '../HistoryCalculation';
import './HomePage.css';
export default class HomePage extends Component {
showMainPage = () => <MainPage/>;
showTable = () => {
        return ( <Table renderTable = {this.props.renderTable}
						onBackTable = {this.props.onBackTable}
                        />)}
showHistoryCalculation = () => {
    return  <HistoryCalculation historyBanks = {this.props.historyBanks}
                                onBackHistory = {this.props.onBackHistory}/>

}
    render () {
        
        const {toggleScreen} = this.props;
        const a = this.showMainPage;
        const b = this.showTable;
        const c = this.showHistoryCalculation;
         return (
            <div>{toggleScreen === 0? a() :
                  toggleScreen === 2? b() : toggleScreen === 1? c() 
                                          : a() }</div>
        )

    }

}