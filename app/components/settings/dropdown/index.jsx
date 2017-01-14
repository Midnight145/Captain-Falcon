import React from 'react';

export class Dropdown extends React.Component {
    render = () => {
        const { options, value } = this.props;

        return <select value={value} onChange={e => this.props.onChange(e.target.value)}>
            {options.map((option, i) => {
                return <option key={i} value={option}>{option}</option>;
            })}
        </select>
    }
}