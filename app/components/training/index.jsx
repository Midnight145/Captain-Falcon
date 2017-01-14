import React from 'react';
import { IndexLink } from 'react-router';

import { Cube } from '../../containers/cube';

export class Training extends React.Component {
    render = () => {
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
        return <div>
            <IndexLink to='/'>Home</IndexLink>
            <div>This is the training page!</div>
            <Cube stage={stage} alg={alg}/>
        </div>;
    }
}