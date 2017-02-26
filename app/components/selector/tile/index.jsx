import React from 'react';
import { Button } from 'react-bootstrap';

export class Tile extends React.Component {
    render = () => {
        const { set } = this.props;
        return <Button onClick={this.props.onClick}>{set.shortName}</Button>;
    };
}