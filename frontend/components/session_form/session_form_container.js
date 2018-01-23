import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, removeErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
return {
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  path: ownProps.match.path
};
};



const mapDispatchToProps = (dispatch, ownProps) => {
    const formType = (ownProps.location.pathname.slice(1));
    const processForm = (ownProps.location.pathname.slice(1)) === "login" ? login : signup ;
  return {
    processForm: (user) => dispatch(processForm(user)),
    removeErrors: () => dispatch(removeErrors()),
    formType
  };

};





export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
