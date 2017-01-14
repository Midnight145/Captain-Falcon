import React from 'react';

export class Cube extends React.Component {
    render() {
        const { size, stage, alg, view } = this.props;
        const parameters = {
            size,
            stage,
            'case': alg.replace(/\s+/g, ''),
            view: view ? '' : 'plan'
        };
        let query = '?fmt=svg&bg=t';
        for (let key in parameters) {
            query += '&' + key + '=' + parameters[key];
        }

        const url = 'http://cube.crider.co.uk/visualcube.png' + query;

        console.log(url);

        return <div>
            <img src={url} />
        </div>;
    }
}