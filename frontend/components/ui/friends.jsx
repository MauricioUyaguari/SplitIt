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
    return (
      <div className="ui-message-div">
        <div className="ui-message">Friend request send to Henry</div>
      </div>
    );
  }



}

export default FriendsUIRender;
