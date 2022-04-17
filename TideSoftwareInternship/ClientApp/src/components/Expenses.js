import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Expenses extends Component {
  static displayName = Expenses.name;

  constructor(props) {
    super(props);
    this.state = { expenses: [], loading: true };
    }

    static edit(id) {
        window.location.href = "expense/edit/" + id;
    }

    static delete(id) {
        fetch('expenselists/' + id, { method: 'DELETE' })
            .then(json => {
                window.location.href = "expenses";
            })
    }

  componentDidMount() {
    this.expenseData();
  }

  static renderExpensesTable(expenses) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense =>
              <tr key={expense.name}>
              <td>{expense.name}</td>
              <td>{expense.description}</td>
                  <td><button className="btn btn-success" onClick={(id) => this.edit(expense.id)}>Edit</button> &nbsp;</td>
                  <td><button className="btn btn-danger" onClick={(id) => this.delete(expense.id)}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : Expenses.renderExpensesTable(this.state.expenses);

    return (
      <div>
        <h1 id="tabelLabel" >Expense List</h1>
            <p>
                <Link to="/add-expense">Add expense</Link>
            </p>
        {contents}
      </div>
    );
  }

  async expenseData() {
    const response = await fetch('expenselists');
    const data = await response.json();
    this.setState({ expenses: data, loading: false });
  }

}
