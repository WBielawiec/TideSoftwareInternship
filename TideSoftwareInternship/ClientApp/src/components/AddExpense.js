import React, { Component } from 'react';

export class Expense {
    constructor() {
        this.id = 0;
        this.name = "";
        this.description = "";
    }
}

export class AddExpense extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", expense: new Expense(), loading: true };
        this.intialize();

        this.handleAccept = this.handleAccept.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    async intialize() {

        var id = this.props.match.params["id"];
        if (id > 0) {
            const response = await fetch('expenselists/' + id);
            const data = await response.json();
            this.setState({ title: "Edit", expense: data, loading: false });
        }
        else {

            this.state = { title: "Create", expense: new Expense(), loading: false };
        }
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();

        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>Expense</h3>
                {contents}
            </div>
        );
    }


    handleAccept(event) {
        event.preventDefault();

        const data = new FormData(event.target);

        if (this.state.expense.id) {
            const response1 = fetch('expenselists/' + this.state.expense.id, { method: 'PUT', body: data });
            this.props.history.push('/expenses');
            window.location.reload()
        }
        else {
            const response2 = fetch('expenselists/', { method: 'POST', body: data });
            this.props.history.push('/expenses');
            window.location.reload()
        }
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push('/expenses');
    }

    renderCreateForm() {
        return (
            <form onSubmit={this.handleAccept}>
                <div className="form-group row">
                    <input type="hidden" name="id" value={this.state.expense.id} />
                </div>

                <div className="form-group row">
                    <div className="col-md-6">
                        <label for="nameInput">Name:</label>
                        <input className="form-control" id="nameInput" type="text" name="name" defaultValue={this.state.expense.name} required />
                        <label for="descriptionInput">Description:</label>
                        <input className="form-control" id="descriptionInput" type="text" name="description" defaultValue={this.state.expense.description} required />
                    </div>
                </div>

                <div className="form-group">

                    <button type="submit" className="btn btn-success mr-1" value={this.state.expense.id}>Save</button>
                    <button className="btn btn-danger mr-1" onClick={this.handleCancel}>Cancel</button>
                </div>
            </form>
        );
    }

}