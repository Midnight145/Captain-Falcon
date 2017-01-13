import React from 'react';
import { Link } from 'react-router';

export class Home extends React.Component {
    render() {
        return <div>
            <div>
                <Link to="timeAttack">Time Attack!</Link>
                <Link to="training">Training!</Link>
                <Link to="settings">Settings!</Link>
            </div>
        </div>;
    }
}