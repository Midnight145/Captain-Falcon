import React from 'react';
import { IndexLink } from 'react-router';

import { Toggle } from './toggle';

export class Settings extends React.Component {
    updateSettings = (settings) => {
        return () => {
            this.props.updateSettings(settings);
        }
    };

    handleSize = (e) => {
        const size = e.target.value;
        this.updateSettings({ size })();
    };

    render = () => {
        const { settings } = this.props;
        const angle = settings.view ? 'Isometric' : 'Top Down';
        return <div>
            <IndexLink to='/'>Home</IndexLink>
            <div>
                <label>{'Cube Angle: ' + angle }</label>
                <Toggle state={settings.view} onChange={this.updateSettings({ view: !settings.view})}/>
            </div>
            <div>
                <label>{'Cube Size: ' + settings.size}</label>
                <input type="range" value={settings.size}  min="100" max="400" onChange={this.handleSize} />
            </div>
        </div>;
    }
}