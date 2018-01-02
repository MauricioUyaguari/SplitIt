import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
return {
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
};
};



const mapDispatchToProps = (dispatch, ownProps) => {
    const formType = (ownProps.location.pathname.slice(1));
    const processForm = (ownProps.location.pathname.slice(1)) === "login" ? login : signup ;
  return {
    processForm: (user) => dispatch(processForm(user)),
    formType
  };

};





export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
