import React from 'react';

export class Toggle extends React.Component {
    render = () => {
        const { state, onChange } = this.props;

        return <span onClick={onChange}>{'I am toggle ' + state}</span>;
    }
}