import { connect } from 'react-redux';
import { fetchBill } from '../../actions/bills_actions';
import BillCommentsShow from './bill_comments_show';
import {createComment} from '../../actions/comments_actions';

const mapStateToProps = (state, ownProps) => {

  const { friend } = ownProps;
  return{
    comments: Object.values(state.comments),
    currentUser: state.session.currentUser,
    friend
  };
};


const mapDispatchToProps = (dispatch) => {
    return {
      fetchBill: (id) => dispatch(fetchBill(id)),
      createComment: (comment) => dispatch(createComment(comment))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(BillCommentsShow);
