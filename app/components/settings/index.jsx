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
        return <div>
            <IndexLink to='/'>Home</IndexLink>
            <label>Cube Angle</label>
            <Toggle state={settings.view} onChange={this.updateSettings({ view: !settings.view})}/>
            <label>Cube Size</label>
            <input type="range" value={settings.size}  min="100" max="400" onChange={this.handleSize} />
        </div>;
    }
}