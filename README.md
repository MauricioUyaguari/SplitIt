# SplitIt


SplitIt is an application to help calculate expenses between two parties.  The app lets friends and family keep track of their bills.  This is done by doing the calculation on how much each should paid based on a percentage and keeping track of transactions between the two. It also provides some graphs and has a dashboard for the user to keep track of their balances between parties.  SplitIt is meant to be a clone of [Splitwise](https://splitwise.com).

SplitIt uses the following technologies to implement:

* PostgreSQL as a database.  Ruby and Rails were used to access and manipulate the database
* jQuery in the form of AJAX requests were used to get information from the database
* The front end used react-redux to keep track of state and render pages based of the local store



[Link to App](https://splitit-mu.herokuapp.com/#/)


#Set Up
In order to run on your local machine, you will need to `npm install` and run `bundle install`.  After this is completed to see it in your local host, run  `webpack --watch` and `rails s`.

# Main Features
## Create and login with secure authenication
Lets user securely log in and create and account. Uses Bcrypt.
![GitHub Logo](/app/assets/images/snipet_User_Auth.png)
## Adding friends through searching  by username
My app gives the ability for the user to search through the user database and add friends.  After searching one can simply click on add to add them to their friends list.
![GitHub Logo](/app/assets/images/snipet_search.png)
## Adding bills and being able to split it by chosen amount with friends
![GitHub Logo](/app/assets/images/snipet_bill.png)
## Being able to comment on each others Bills.
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
