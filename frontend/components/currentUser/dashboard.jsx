import React from 'react';
import { Link } from 'react-router-dom';

class DashboardView extends React.Component {

  constructor(props){
    super(props);
  }


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


  renderFriendsYouOwe(max){
    const { currentUser } = this.props;
    if(currentUser.balances === undefined){
      return null;
    }
    const noZeros = currentUser.balances.filter(el => el[2] < 0);
    return(
      noZeros.map(balance =>
        <li className="dashboard-neg" key={balance[0]}>
          <Link  className="dashboard-friend-links" to={`/friends/${balance[0]}`}>
          <span>{balance[1]}</span>
          <span>${Math.abs(balance[2])}</span>
          </Link>
      </li>

      )
    );
  }

  renderFriendsYouAreOwed(max){
    const { currentUser } = this.props;
    if(currentUser.balances === undefined){
      return null;
    }
    const noZeros = currentUser.balances.filter(el => el[2] > 0);
    const styles= (amt) => {
      let per = Math.round(((amt)/(max)) * 100);
      return {width: `${per}%`};
    };

    return(
      noZeros.map(balance =>
        <li className="dashboard-pos" style={styles(balance[2])} key={balance[0]}>
          <Link className="dashboard-friend-links" to={`/friends/${balance[0]}`}>
            <span>{balance[1]}</span>
            <span>${balance[2]}</span> </Link>
        </li>
      )
    );
  }


  calculateMax(){
    if(this.props.currentUser.balances == undefined){return 0;}
    let max = 0 ;
    if(this.props.currentUser.balances === undefined || this.props.currentUser.balances.length < 1 ){
       max = 0;
    }else{
       max = 0;
      this.props.currentUser.balances.forEach((el) => {
        if(Math.abs(el[2]) > max){
          max = Math.abs(el[2]);
        }
      });
    }
        return max;

  }

render(){
  const max = this.calculateMax();
  return(<div className="friends-show">
  <div className="new-div">
      <div className="dashboard-top-nav topbar-friend ">
          <div className="dashboard-top-nav-upper">
            <div className="dashboard-label">
              Dashboard
            </div>
            <div>
              <button className="addBillButton">Add a Bill</button>
            </div>
          </div>
          <div className="dashboard-top-nav-bottom">
            <div className="no-left dashboard-bottom-block">
              <div>total balance</div>
              <div className={(this.youAreOwed() >= 0) ? "neg money" : "pos money"}>{this.totalBalance()}</div>
            </div>
            <div className="dashboard-bottom-block" >
              <div>You Owe</div>
              <div className="neg money">{this.youOwe()}</div>
            </div>
            <div className="dashboard-bottom-block">
              <div>You are Owed</div>
              <div className="pos money" >{this.youAreOwed()}</div>
            </div>

          </div>
      </div>
      <div className="dashboard-middle">
        <span>You Owe</span>
        <span>You are Owed</span>
      </div>
      <div className="dashboard-main-section">
        <div className="dashboard-main-owe">
          <ul>
            {this.renderFriendsYouOwe(max)}
          </ul>
        </div>
        <figure className="dashboard-container-figure">
          <img className="dashboard-figure" src={window.staticImages.dashboard_figure}></img>
        </figure>
        <div className="dashboard-main-owe">
          <ul>
              {this.renderFriendsYouAreOwed(max)}
          </ul>
        </div>
      </div>
    </div>
    <div className="right-nav-friends-summary">
      <p>Welcome to Split It the best app ever</p>
    </div>
  </div>
);
}

}



export default DashboardView;
