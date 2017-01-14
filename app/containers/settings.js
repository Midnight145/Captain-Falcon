import { connect } from 'react-redux';

import { Settings as Component } from 'components/settings';

import { updateSettings } from 'actions/settings';

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

export const Settings = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);