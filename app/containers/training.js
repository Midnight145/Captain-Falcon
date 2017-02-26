import { connect } from 'react-redux';

import { Training as Component } from 'components/training';

import { updateSelection } from 'actions/selections';

const mapStateToProps = (state) => {
    const set = state.selections.set ? state.selections.set : null;
    return {
        set,
        sets: state.library,
        selectedSet: state.selections.set,
        selectedSubSet: state.selections.subSet,
        setLoaded: state.selections.setLoaded,
        subSetLoaded: state.selections.subSetLoaded
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