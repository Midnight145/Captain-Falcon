import React from 'react';
import { IndexLink } from 'react-router';

import { Cube } from '../../containers/cube';

export class Training extends React.Component {
    constructor () {
        super();
        this.state = {
            state: 'home'
        }
    };

    render = () => {
        let body;
        switch (this.state.state) {
            case 'active':
                const collT = [
                    "R U2' R' U' R U' R2 U2' R U R' U R",
                    "R' U R U2' R' L' U R U' L",
                    "y l' U' L U R U' r' F",
                    "y2 F R U R' U' R U' R' U' R U R' F'",
                    "y' r U R' U' r' F R F'",
                    "R' U R2 D r' U2 r D' R2 U' R"
                ];
                const stage = 'coll';
                const alg = collT[Math.floor(Math.random()*collT.length)];
                body = <div>
                    <Cube stage={stage} alg={alg}/>
                    <button onClick={() => this.setState({ state: 'home' })}>Solved!</button>
                </div>;
                document.addEventListener('keydown', (e) => {
                    if (e.key === ' ') {
                        e.preventDefault();
                        this.setState({ state: 'home' });
                    }
                });
                break;
            default:
                body = <div><button onClick={() => this.setState({ state: 'active' }) }>Start!</button></div>;
        }

        return <div>
            <IndexLink to='/'>Home</IndexLink>
            {body}
        </div>;
    }
}