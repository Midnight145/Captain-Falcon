import React from 'react';
import { Link } from 'react-router';

import splash from 'images/splash.png';

import styles from './styles.scss';

export class Home extends React.Component {
    render = () => {
        return <div>
            <div>
                <Link to='training'>Training!</Link>
                <Link to='timeAttack'>Time Attack!</Link>
                <Link to='library'>Library!</Link>
                <Link to='settings'>Settings!</Link>
            </div>
            <div>
                This is the home page!
            </div>
            <img id={styles.splash} src={splash} />
        </div>;
    }
}