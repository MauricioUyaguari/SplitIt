import { connect } from 'react-redux';
import BodyGreeting from './body_greeting';



const mapStateToProps = ( { session }, ownProps) => {
  return {
    currentUser: session.currentUser
  };
};



export default connect(mapStateToProps,null)(BodyGreeting);
