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

  author(comment) {
    const author = (comment.author_id === this.props.currentUser.id) ? this.props.currentUser : this.props.friend;
    return (
      <div>{author.email}</div>
    );
  }
  renderComments(){
    const filteredComments = this.props.comments.filter(comment => comment.bill_id === this.props.bill.id);

    return(filteredComments.map(comment =>
      <li key={comment.id}>
        <div key={comment.id} className="comment-info">
          <div className="comment-body-author">
            <div className="comment-author">{this.author(comment)}</div>
            <div>{comment.body}</div>
          </div>
          <button className="close-comment"onClick={() => this.props.deleteComment(comment.id)}>x</button>
        </div>
      </li>
      )
    );
  }

  render () {
    return(<div>
      <div className="notes-comments-label">
        <img className="icon_comment" src={window.staticImages.icon_comment}></img>
        Notes and Comments
      </div>
      <div>
        <ul className="ul-comments">
        {this.renderComments()}
        </ul>
      </div>
      <form className="add-comment-form" onSubmit={this.handleSubmit}>
        <label>
          <textarea
            className="add-comment-input"
            value={this.state.body}
            onChange={this.updateBody()}
            placeholder="Add a Comment"
            />
        </label>
        <button className="post-comment-button">Post</button>
      </form>
    </div>);
  }
}


export default BillCommentsShow;
