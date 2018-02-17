import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class FriendsUIRender extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: this.props.uiFriend[0]
    };
  }




  render() {
    const message = this.props.uiFriend[0];
    return (
      <div className="ui-message">{message}</div>
    );
  }



}

export default FriendsUIRender;
