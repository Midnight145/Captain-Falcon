import { connect } from 'react-redux';

import { Training as Component } from 'components/training';

import { updateSelection } from 'actions/selections';

const mapStateToProps = (state) => {
    return {
        algSet: state.selections.algSet,
        subSet: state.selections.subSet,
        loaded: state.selections.loaded
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateSelection: (selection) => {
            dispatch(updateSelection(selection));
        }
    };
};

export const Training = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);