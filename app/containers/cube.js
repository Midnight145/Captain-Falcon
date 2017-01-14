import { connect } from 'react-redux';

import { Cube as Component } from '../components/cube';

const mapStateToProps = (state) => {
    const { view, size } = state.settings;
    return {
        view,
        size
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export const Cube = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);