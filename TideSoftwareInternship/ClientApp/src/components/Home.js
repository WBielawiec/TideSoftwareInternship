import * as React from 'react';

import '@progress/kendo-theme-default/dist/all.css';
import { Calendar } from '@progress/kendo-react-dateinputs'

export class Home extends React.Component {
    static displayName = Home.name;

  render () {
    return (

        <div className="App">
            <h1>Hello KendoReact!</h1>
            <Calendar />
        </div>

    );
  }
}
