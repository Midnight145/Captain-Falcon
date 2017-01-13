import React from 'react';
import { IndexLink } from 'react-router';

export class TimeAttack extends React.Component {
    render() {
        return <div>
            <IndexLink to='/'>Home</IndexLink>
        </div>;
    }
}