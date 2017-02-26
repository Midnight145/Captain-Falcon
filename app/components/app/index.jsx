import React from 'react';

import { getAllSets } from 'utils/api/library';

import '../../styles/vendor/bootstrap.css';
import '../../styles/vendor/bootstrap-theme.css';

export class App extends React.Component {
    render = () => {
        return <div>{this.props.children}</div>;
    };

    componentDidMount = () => {
        getAllSets().then(res => {
            this.props.populateSets(res);
        }).catch(err => {
            console.error('Error loading sets.');
        });
    }
}