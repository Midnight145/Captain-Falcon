import React from 'react';
import { IndexLink } from 'react-router';

import { Cube } from 'containers/cube';

import { Dropdown } from '../settings/dropdown';

import { algs } from 'algorithms';

export class Training extends React.Component {
    constructor() {
        super();
        this.state = {
            state: 'home',
            set: false,
            algSet: null
        }
    }

    changeSet = (set) => {
        this.props.updateSelection({ loaded: false, algSet: set });
        System.import('algorithms/' + set).then((module) => {
            this.setState({ set: module, algSet: set });
            this.props.updateSelection({ loaded: true });
        });
    };

    render = () => {
        const { algSet, subSet, loaded } = this.props;
        const { set } = this.state;
        let body;
        switch (this.state.state) {
            case 'active':
                const stage = set.stage;
                console.log(stage);
                // const alg = collT[Math.floor(Math.random()*collT.length)];
                body = <div>
                    {/*<Cube stage={stage} alg={alg}/>*/}
                    <button onClick={() => this.setState({ state: 'home' })}>Solved!</button>
                </div>;
                document.addEventListener('keydown', (e) => {
                    if (e.key === ' ') {
                        e.preventDefault();
                        this.setState({ state: 'home' });
                    }
                });
                break;
            case 'home':
                const setOptions = Object.keys(algs);

                const setSelector = <Dropdown options={setOptions} onChange={this.changeSet} value={algSet} />;

                const subSelector = <Dropdown options={Object.keys(algs)} />;

                const ready = subSet !== true && set && loaded;

                body = <div>
                    {setSelector}

                    <button onClick={() => this.setState({ state: 'active' }) } disabled={!ready}>Start!</button>
                </div>;
                document.addEventListener('keydown', (e) => {
                    if (e.key === ' ') {
                        e.preventDefault();
                        this.setState({ state: 'active' });
                    }
                });
        }

        return <div>
            <IndexLink to='/'>Home</IndexLink>
            {body}
        </div>;
    }
}