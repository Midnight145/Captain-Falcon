import React from 'react';
import { IndexLink } from 'react-router';

export class NotFound extends React.Component {
    render = () => {
        return <div>
            <IndexLink to='/'>Home</IndexLink>
            <div>Oops! This page doesn't exist!</div>
        </div>;
    }
}