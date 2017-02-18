import React from 'react';
import { IndexLink } from 'react-router';

import { Indicator } from 'components/selector/indicator';

export class HomePage extends React.Component {
    static contextTypes = {
        changePage: React.PropTypes.func
    };

    render = () => {
        const { set, subSet } = this.props;
        return <div>
            <IndexLink to='/'>Home</IndexLink>
            <Indicator set={set} subSet={subSet} />
            <button onClick={e => this.context.changePage('selections')}>Select Algorithms</button>
        </div>
    }
}