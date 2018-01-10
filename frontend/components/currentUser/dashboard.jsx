import React from 'react';


class DashboardView extends React.Component {


componentWillMount (){
  this.props.fetchDashboard();
}




totalBalance(){
  const {currentUser} = this.props;
  const absBalance = Math.abs(currentUser.totalBalance);
  if(currentUser.totalBalance < 0){
    return(
      <div>
        <span>-${absBalance}</span>
      </div>
    );
  } else {
      return(
        <div>
          <span>${absBalance}</span>
        </div>
      );
  }


}

youOwe(){
  const {currentUser} = this.props;
  return (
    <div>
      <span>${currentUser.youOwe}</span>
    </div>
  );
}

youAreOwed(){
  const {currentUser} = this.props;
  return (
    <div>
      <span>${currentUser.youAreOwed}</span>
    </div>
  );
}


  renderFriendsYouOwe(){
    const { currentUser } = this.props;
    if(currentUser.balances === undefined){
      return null;
    }
    const noZeros = currentUser.balances.filter(el => el[2] < 0);
    return(
      noZeros.map(balance =>
        <li key={balance[0]}>
          {balance[1]}
          {balance[2]}
        </li>
      )
    );
  }

  renderFriendsYouAreOwed(){
    const { currentUser } = this.props;
    if(currentUser.balances === undefined){
      return null;
    }
    const noZeros = currentUser.balances.filter(el => el[2] > 0);
    return(
      noZeros.map(balance =>
        <li key={balance[0]}>
          {balance[1]}
          {balance[2]}
        </li>
      )
    );
  }


render(){
  return(<div>
    <div className="dashboard-top-nav">
        <div className="dashboard-top-nav-upper">
          <div>
            Dashboard
          </div>
          <div>
            <button>Add a Bill</button>
          </div>
        </div>
        <div className="dashboard-top-nav-bottom">
          <div className="dashboard-total-balance">
            totalBalance
            {this.totalBalance()}
          </div>
          <div className="dashboard-total-balance">
            You Owe
            {this.youOwe()}
          </div>
          <div className="dashboard-total-balance">
            You are Owed
            {this.youAreOwed()}
          </div>

        </div>
    </div>
    <div>
      <ul> You owe
        {this.renderFriendsYouOwe()}
      </ul>
      <ul> You are Owed
          {this.renderFriendsYouAreOwed()}
      </ul>
    </div>
  </div>
);
}

}



export default DashboardView;
