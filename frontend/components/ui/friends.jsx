import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class FriendsUIRender extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: this.props.uiFriend
    };
  }

  handleClick(){


  }


  render() {
    const message = this.props.uiFriend;
    if (message == undefined) {
      return null;
    }


    return (
      <div className="ui-message-div">
        <span>x</span>
        <div className="ui-message"> {message}</div>
      </div>
    );
  }
}

export default FriendsUIRender;
