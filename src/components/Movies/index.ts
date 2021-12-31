import { Dispatch } from 'redux';
import Movies from './Movies';
import { connect } from 'react-redux';
import { AUTH_ACTIONS, logOut } from 'redux/actions/auth/authActions';
import { TAction } from 'redux/types';

const mapDispatchToProps = (dispatch: Dispatch<TAction<AUTH_ACTIONS>>) => ({
    logOut: () => dispatch(logOut()),
});

export default connect(null, mapDispatchToProps)(Movies);
