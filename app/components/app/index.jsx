import React from 'react';

import { getAllSets } from 'utils/api/library';

export class App extends React.Component {
    render = () => {
        return <div>{this.props.children}</div>;
    };

    componentDidMount = () => {
        getAllSets().then(res => {
            this.props.populateSets(res);
        }).catch(err => {
            console.error(err);
        });
    }
}