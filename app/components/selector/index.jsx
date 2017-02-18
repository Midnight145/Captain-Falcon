import React from 'react';

import { Tile } from './tile';

export class Selector extends React.Component {
    render = () => {
        const { sets } = this.props;
        return <div>
            {sets.map((set, i) => <Tile set={set} key={i} />)}
        </div>
    }
}