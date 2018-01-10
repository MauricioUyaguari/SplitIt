import React from 'react';


class ActivityView extends React.Component {


  ComponentWillMount(){
    if(this.currentUser.balances === undefined){
      this.props.fetchDashboard();
    }
  }


render(){
  return(
    <div>all activity will be here</div>
  );
}

}

export default ActivityView;
