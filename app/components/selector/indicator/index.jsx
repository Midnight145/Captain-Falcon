import React from 'react';

export class Indicator extends React.Component {
    render = () => {
        const { set, subSet } = this.props;
        return <div>
            <div>Selected Sets</div>
            <span>{set ? set.shortName : 'None'}</span>
            <span>{subSet ? subSet.name : null}</span>
        </div>
    }
}