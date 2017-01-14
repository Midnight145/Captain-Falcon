import React from 'react';

export class Dropdown extends React.Component {
    render = () => {
        const { options } = this.props;

        return <select>
            {options.map((option, i) => {
                return <option key={i}>{option}</option>;
            })}
        </select>
    }
}