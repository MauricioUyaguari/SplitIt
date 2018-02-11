# SplitIt


SplitIt is an application to help calculate expenses between two parties.  The app lets friends and family keep track of their bills.  This is done by doing the calculation on how much each should paid based on a percentage and keeping track of transactions between the two. It also provides some graphs and has a dashboard for the user to keep track of their balances.  SplitIt is meant to be a clone of [Splitwise](https://splitwise.com).

SplitIt uses the following technologies to implement:

* PostgreSQL as a database.  Ruby and Rails were used to access and manipulate the database
* jQuery in the form of AJAX requests were used to get information from the database
* The front end used react-redux to keep track of state and render pages based of the local store



[Link to App](https://splitit-mu.herokuapp.com/#/)


## Set Up
In order to run on your local machine, you will need to run `npm install` and run `bundle install`.  After, run `webpack --watch` and `rails s` to see it in your local server.



# Main Features
## Create and login with secure authenication
Lets user securely log in and create an account. Uses Bcrypt.  Gives a demo login for anyone who just wants to check out the basic layout of the app.
![GitHub Logo](/app/assets/images/snipet_User_Auth.png)
## Adding friends through searching  by username
The app gives the ability for the user to search through the user database and add friends.  After searching, one can simply click on "add" to send a friend request to the chosen user.

The chosen user will then get a friend request and will only get added to the current user's friend once they have accepted the friend request.


The following is the ajax request given by the string searched by the user.
```javascript
export const searchUsers = (query) => {
  return($.ajax({
    url: '/api/users/search',
    method: 'GET',
    data: {query}
  })
);
};
```

Returns all users that match the string and are not the current user's friends.
```ruby
def search(username)
  other = self.all_friends.map{|e| e.id} + [self.id]
  User.where.not(id: other).where('email ~ ?', username)
end
```

![GitHub Logo](/app/assets/images/snipet_search.png)
## Adding bills and being able to split it by chosen amount with friends
![GitHub Logo](/app/assets/images/snipet_bill.png)
## Being able to comment on each other's Bills.
![GitHub Logo](/app/assets/images/snipet_friend_dashboard.png)
## Adding transactions so friends can pay each other back
![GitHub Logo](/app/assets/images/snipet_transaction.png)
## Dashboard to keep track of all balances between friends
![GitHub Logo](/app/assets/images/snipet_main_dashboard.png)




# Moving Forward

* Add Bill/ Transactions to the dashboard, activity and all pages to let the user add bills and transactions to any of their friends

* Be able to friend request and accept to ensure friends want to add each other.

* Add Comments to transactions

* Add Group features so that a user is able to join and create a group.
