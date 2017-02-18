import React from 'react';

import { ActivePage } from './pages/active';
import { HelpPage } from './pages/help';
import { HomePage } from './pages/home';
import { SelectionsPage } from './pages/selections';

export class Training extends React.Component {
    static childContextTypes = {
        page: React.PropTypes.string,
        changePage: React.PropTypes.func,
        sets: React.PropTypes.array
    };

    getChildContext = () => {
        return {
            page: this.state.page,
            changePage: this.changePage,
            sets: this.props.sets
        }
    };

    constructor() {
        super();
        this.state = {
            page: 'home'
        }
    };

    changePage = (page) => {
        console.log(page);
        this.setState({
            page
        });
    };

    render = () => {
        const { set, sets, selectedSet, selectedSubSet, setLoaded, subSetLoaded } = this.props;

        switch (this.state.page) {
            case 'home':
                return <ActivePage />;
            case 'selections':
                return <SelectionsPage />;
            case 'active':
                return <HomePage set={set} subSet={null} />;
            case 'help':
                return <HelpPage />;
            default:
                return <div>Uh, there's an issue...</div>;
        }
    }
}