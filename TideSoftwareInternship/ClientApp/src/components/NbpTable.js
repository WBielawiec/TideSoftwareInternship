import React, { Component } from 'react';

export class NbpTable extends Component {
    static displayName = NbpTable.name;

    constructor(props) {
        super(props);
        this.state = { nbp: [], loading: true };
    }

    componentDidMount() {
        this.populateNBPData();
    }

    static renderNBPTable(nbp) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Currency</th>
                        <th>Bid</th>
                        <th>Ask</th>
                    </tr>
                </thead>
                <tbody>
                    {nbp.map(nbps =>
                        <tr key={nbps.code}>
                            <td>{nbps.code}</td>
                            <td>{nbps.currency}</td>
                            <td>{nbps.bid}</td>
                            <td>{nbps.ask}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : NbpTable.renderNBPTable(this.state.nbp);

        return (
            <div>
                <h1 id="tabelLabel" >Current exchange rate</h1>
                <p>From NBP Web API</p>
                {contents}
            </div>
        );
    }

    async populateNBPData() {
        const response = await fetch('nbp');
        const data = await response.json();
        this.setState({ nbp: data, loading: false });
    }
}
