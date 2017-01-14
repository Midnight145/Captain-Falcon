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

    start = (e) => {
        if (e.key === ' ') {
            e.preventDefault();
            this.setState({ state: 'active' });
            document.removeEventListener('keydown', this.start);
        }
    }

    solved = (e) => {
        if (e.key === ' ') {
            e.preventDefault();
            this.setState({ state: 'home' });
            document.removeEventListener('keydown', this.solved);
        }
    }

    changeSet = (set) => {
        this.props.updateSelection({ loaded: false, algSet: set });
        System.import('algorithms/' + set).then((module) => {
            this.setState({ set: module, algSet: set });
            this.props.updateSelection({ subSet: module.subSet, loaded: true });
        });
    };

    render = () => {
        const { algSet, subSet, loaded } = this.props;
        const { set } = this.state;
        let body;
        switch (this.state.state) {
            case 'active':
                const { stage } = set;

                console.log('hi');

                const cases = subSet ? set[subSet] : set[algSet];

                const keys = Object.keys(cases)
                const _case = cases[keys[ keys.length * Math.random() << 0]];

                body = <div>
                    <Cube stage={stage} alg={_case[0]}/>
                    <button onClick={() => this.setState({ state: 'home' })}>Solved!</button>
                </div>;
                document.addEventListener('keydown', this.solved);
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
                document.addEventListener('keydown', this.start);
        }

        return <div>
            <IndexLink to='/'>Home</IndexLink>
            {body}
        </div>;
    }
}