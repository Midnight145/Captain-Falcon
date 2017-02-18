import React from 'react';

import { Selector } from '../../../selector';

export class SelectionsPage extends React.Component {
    static contextTypes = {
        sets: React.PropTypes.array
    };

    render = () => {
        return <div>
            <Selector sets={this.context.sets} />
        </div>;
    }
}