import React from 'react';

import { Tile } from './tile';

export class Selector extends React.Component {
    handleClick = (set) => {
        return () => {
            this.props.onSelect(set);
        };
    };

    render = () => {
        const { sets } = this.props;
        const elements = [];
        let i = 0;
        for (let set in sets) {
            if (sets.hasOwnProperty(set)) {
                set = parseInt(set);
                elements.push(<Tile set={sets[set]} key={i} onClick={this.handleClick(set)}/>);
            }
            i += 1;
        }
        return <div>
            {elements}
        </div>
    };
}