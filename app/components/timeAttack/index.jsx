import React from 'react';
import { IndexLink } from 'react-router';

export class TimeAttack extends React.Component {
    render = () => {
        return <div>
            <IndexLink to='/'>Home</IndexLink>
            <div>This is the time attack page! It will give you a random case from a selected alg set and only give you a set amount of time to perform it.</div>
        </div>;
    }
}