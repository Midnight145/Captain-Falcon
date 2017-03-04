import React from 'react';

export class ReadyPage extends React.Component {
    static contextTypes = {
        set: React.PropTypes.number,
        sets: React.PropTypes.object,
        changePage: React.PropTypes.func
    };

    render = () => {
        const set = this.context.sets[this.context.set];
        return <div>
            <button onClick={() => this.context.changePage('home')}>Back</button>
            <div>{'I am ready! Set: ' + set.shortName}</div>
            <button onClick={() => this.context.changePage('active')}>Start</button>
        </div>
    };
}