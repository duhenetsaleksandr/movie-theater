import SignIn from './SignIn';
import { connect } from 'react-redux';
import { TStore } from 'redux/reducers/types';
import { TSignInBody } from 'redux/actions/auth/types';
import { fetchSignIn } from 'redux/thunks/auth/authThunks';
import { selectToken } from 'redux/selectors/auth/authSelectors';
import { TThunkDispatchSignIn } from './types';
import { selectIsLoading } from 'redux/selectors/app/appSelectors';

const mapStateToProps = (store: TStore) => ({
    token: selectToken(store),
    isLoading: selectIsLoading(store),
});

const mapDispatchToProps = (dispatch: TThunkDispatchSignIn) => ({
    fetchSignIn: (payload: TSignInBody) => dispatch(fetchSignIn(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
