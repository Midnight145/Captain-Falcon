import React from 'react';

export class ReadyPage extends React.Component {
    static contextTypes = {
        set: React.PropTypes.number,
        changePage: React.PropTypes.func
    };

    render = () => {
        return <div>
            <button onClick={() => this.context.changePage('home')}>Back</button>
            <div>{'I am ready! Set: ' + this.context.set.shortName}</div>
        </div>
    };
}