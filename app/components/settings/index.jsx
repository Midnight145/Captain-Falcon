import React from 'react';
import { IndexLink } from 'react-router';

export class Settings extends React.Component {
    render() {
        return <div>
            <IndexLink to='/'>Home</IndexLink>
            <div>This is the settings page!</div>
        </div>;
    }
}