import React from 'react';

export class Cube extends React.Component {
    render() {
        const { size, stage, alg } = this.props;
        return <div>
            <img src={'http://cube.crider.co.uk/visualcube.png?fmt=svg&bg=t&stage=' + stage + '&size=' + size + '&case=' + alg} />
        </div>;
    }
}