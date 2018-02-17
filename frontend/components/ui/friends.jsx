import React from 'react';


const FriendsUIRender = (props) => {

  const {uiFriend } = props;

    if (props.uiFriend.length < 1){
      return null;
    }

    const message = uiFriend[0];
    return(

      <div>
        {message}
      </div>
    );
};

export default FriendsUIRender;
