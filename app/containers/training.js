import { connect } from 'react-redux';

import { Training as Component } from '../components/training';

import { updateSettings } from '../actions/settings';

const mapStateToProps = (state) => {
    return {
        settings: state.settings
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateSettings: (settings) => {
            dispatch(updateSettings(settings));
        }
    };
};

export const Training = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);