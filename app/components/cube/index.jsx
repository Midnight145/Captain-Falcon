import React from 'react';

import 'twistysim';

export class Cube extends React.Component {
    render = () => {
        const { puzzle, size, stage, view, alg } = this.props;

        if (!view) {

            const parameters = {
                size,
                stage,
                'case': alg.replace(/\s+/g, ''),
                view: 'plan',
                pzl: puzzle
            };
            let query = '?fmt=svg&bg=t';
            for (let key in parameters) {
                query += '&' + key + '=' + parameters[key];
            }

            const url = 'http://stachu.cubing.net/v/' + query;

            return <img src={url} />;

        }

        return <div id='case' ref={div => {
            TTk.TwistyPuzzle(puzzle).alg(alg)('#case');
        }} />;
    }
}