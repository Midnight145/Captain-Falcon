import { connect } from 'react-redux';

import { App as Component } from 'components/app';

import { populateSets } from 'actions/library';

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        populateSets: (sets) => {
            dispatch(populateSets(sets));
        }
    };
};

export const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);