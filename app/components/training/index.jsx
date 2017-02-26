import React from 'react';

import { ActivePage } from './pages/active';
import { HelpPage } from './pages/help';
import { HomePage } from './pages/home';
import { ReadyPage } from './pages/ready';
import { SelectionsPage } from './pages/selections';

export class Training extends React.Component {
    static childContextTypes = {
        sets: React.PropTypes.object,
        page: React.PropTypes.string,
        changePage: React.PropTypes.func,
        set: React.PropTypes.number,
        changeSet: React.PropTypes.func
    };

    getChildContext = () => {
        return {
            sets: this.props.sets,
            page: this.state.page,
            changePage: this.changePage,
            set: this.props.set,
            changeSet: this.changeSet
        }
    };

    constructor() {
        super();
        this.state = {
            page: 'home'
        }
    };

    changePage = (page) => {
        this.setState({
            page
        });
    };

    changeSet = (set) => {
        this.props.updateSelection({
            set
        });
    };

    render = () => {
        const { set, sets, selectedSet, selectedSubSet, setLoaded, subSetLoaded } = this.props;

        switch (this.state.page) {
            case 'active':
                return <ActivePage />;
            case 'help':
                return <HelpPage />;
            case 'home':
                return <HomePage />;
            case 'ready':
                return <ReadyPage />;
            case 'selections':
                return <SelectionsPage />;
            default:
                console.error('Training component loaded invalid page.');
                return <div>Uh, there's an issue...</div>;
        }
    };
}