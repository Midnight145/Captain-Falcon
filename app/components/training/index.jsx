import React from 'react';
import { IndexLink } from 'react-router';

export class Training extends React.Component {
    render() {
        return <div>
            <IndexLink to='/'>Home</IndexLink>
            <div>This is the training page!</div>
        </div>;
    }
}