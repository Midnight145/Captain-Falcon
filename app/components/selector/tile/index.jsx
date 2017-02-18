import React from 'react';

export class Tile extends React.Component {
    render = () => {
        const { set } = this.props;
        return <div>{set.shortName}</div>;
    }
}