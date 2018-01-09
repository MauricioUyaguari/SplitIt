import React from 'react';


class BillCommentsShow  extends React.Component {
  constructor(props){
    super(props);
    this.state = {body: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    this.props.fetchBill(this.props.bill.id);
  }
  handleSubmit(e){
    let {currentUser, bill} = this.props;
    e.preventDefault();
    let newComment = {body: this.state.body, author_id: currentUser.id, bill_id: bill.id};
    this.props.createComment(newComment);
    this.setState({body: ""});
  }

  updateBody(){
    return (e) => {
      this.setState({["body"]: e.target.value});
    };
  }
  renderComments(){
    const filteredComments = this.props.comments.filter(comment => comment.bill_id === this.props.bill.id);
    debugger
    return(filteredComments.map(comment =>
      <li key={comment.id}>
        <span key={comment.id}>{comment.body}</span>
        <button onClick={() => this.props.deleteComment(comment.id)}>x</button>
      </li>
      )
    );
  }

  render () {
    return(<div>
      {this.props.bill.description}
      <div>Notes and Comments
        <ul>
        {this.renderComments()}
        </ul>
      </div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            value={this.state.body}
            onChange={this.updateBody()}
            placeholder="Add a Comment"
            />
        </label>
        <button>Post</button>
      </form>
    </div>);
  }
}


export default BillCommentsShow;
