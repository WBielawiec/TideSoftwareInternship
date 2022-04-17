import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { NbpTable } from './components/NbpTable'
import { Expenses } from './components/Expenses'
import { AddExpense } from './components/AddExpense'

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/nbp-table' component={NbpTable} />
                <Route path='/expenses' component={Expenses} />
                <Route path='/add-expense' component={AddExpense} />
                <Route path='/expense/edit/:id' component={AddExpense} />
            </Layout>
        );
    }
}
