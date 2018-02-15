import React from 'react';


const FriendsUIRender = (props) => {

  const {uiFriend } = props;

    if (props.uiFriend.length < 1){
      return null;
    }
    return(
      <div>
        This is where erros will go if there are any
      </div>
    );
};

export default FriendsUIRender;
