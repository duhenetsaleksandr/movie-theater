import SignIn from './SignIn';
import { connect } from 'react-redux';
import { TStore } from 'redux/reducers/types';
import { TSignInBody } from 'redux/actions/auth/types';
import { fetchSignIn } from 'redux/thunks/auth/authThunks';
import { selectAuth } from 'redux/selectors/auth/authSelectors';
import { TThunkDispatchSignIn } from './types';

const mapStateToProps = (store: TStore) => ({
    auth: selectAuth(store),
});

const mapDispatchToProps = (dispatch: TThunkDispatchSignIn) => ({
    fetchSignIn: (payload: TSignInBody) => dispatch(fetchSignIn(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
