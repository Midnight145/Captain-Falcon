import React from 'react';

import { Selector } from '../../../selector';

export class SelectionsPage extends React.Component {
    static contextTypes = {
        sets: React.PropTypes.object,
        changeSet: React.PropTypes.func,
        changePage: React.PropTypes.func
    };

    handleSelect = (set) => {
        this.context.changeSet(set);
        this.context.changePage('ready')
    };

    render = () => {
        return <div>
            <Selector sets={this.context.sets} onSelect={this.handleSelect} />
        </div>;
    };
}