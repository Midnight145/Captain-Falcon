import React from 'react';
import { IndexLink } from 'react-router';

export class Library extends React.Component {
    render() {
        return <div>
            <IndexLink to='/'>Home</IndexLink>
            <div>This is the library page! It will allow you to browse alg sets.</div>
        </div>;
    }
}