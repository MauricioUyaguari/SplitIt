# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Friendship.destroy_all
Bill.destroy_all
Split.destroy_all
Comment.destroy_all
Transaction.destroy_all

demoUser = User.create!(email: "DemoUser", password: "password", image_url: "test")
demoUser.save!

#users
user1 = User.create!(email: "Mauricio", password: "password", image_url: "test")
user2 = User.create!(email: "Uyaguari", password: "password", image_url: "test")
user3 = User.create!(email: "Nanci", password: "password", image_url: "test")
user4 = User.create!(email: "German", password: "password", image_url: "test")
user5 = User.create!(email: "Dylan", password: "password", image_url: "test")
user6 = User.create!(email: "Jason", password: "password", image_url: "test")
user7 = User.create!(email: "Javier", password: "password", image_url: "test")
user8 = User.create!(email: "Martha", password: "password", image_url: "test")
user9 = User.create!(email: "Steven", password: "password", image_url: "test")
user10 = User.create!(email: "Jayden", password: "password", image_url: "test")
user11 = User.create!(email: "Cristina", password: "password", image_url: "test")
user12 = User.create!(email: "Flo", password: "password", image_url: "test")
user13 = User.create!(email: "Kj", password: "password", image_url: "test")
user14 = User.create!(email: "Giselle", password: "password", image_url: "test")
user15 = User.create!(email: "Romero", password: "password", image_url: "test")
user16 = User.create!(email: "Jose", password: "password", image_url: "test")
user17 = User.create!(email: "Jonnathan", password: "password", image_url: "test")



#Demo Friendships
Friendship.create!(requester_id: demoUser.id, friend_id: user1.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user2.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user3.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user4.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user5.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user6.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user7.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user8.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user9.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user10.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user12.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user13.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user14.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user15.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user16.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user17.id)


# friendships
Friendship.create!(requester_id: user1.id, friend_id: user2.id)
Friendship.create!(requester_id: user1.id, friend_id: user3.id)
Friendship.create!(requester_id: user1.id, friend_id: user4.id)
Friendship.create!(requester_id: user1.id, friend_id: user5.id)
Friendship.create!(requester_id: user1.id, friend_id: user6.id)
Friendship.create!(requester_id: user2.id, friend_id: user3.id)
Friendship.create!(requester_id: user2.id, friend_id: user4.id)
Friendship.create!(requester_id: user2.id, friend_id: user5.id)
Friendship.create!(requester_id: user2.id, friend_id: user6.id)
Friendship.create!(requester_id: user2.id, friend_id: user7.id)
Friendship.create!(requester_id: user3.id, friend_id: user4.id)
Friendship.create!(requester_id: user3.id, friend_id: user5.id)
Friendship.create!(requester_id: user3.id, friend_id: user6.id)
Friendship.create!(requester_id: user3.id, friend_id: user7.id)
Friendship.create!(requester_id: user4.id, friend_id: user5.id)
Friendship.create!(requester_id: user4.id, friend_id: user6.id)
Friendship.create!(requester_id: user4.id, friend_id: user7.id)
Friendship.create!(requester_id: user5.id, friend_id: user6.id)
Friendship.create!(requester_id: user5.id, friend_id: user7.id)
Friendship.create!(requester_id: user5.id, friend_id: user8.id)
Friendship.create!(requester_id: user5.id, friend_id: user9.id)
Friendship.create!(requester_id: user5.id, friend_id: user10.id)
Friendship.create!(requester_id: user6.id, friend_id: user7.id)
Friendship.create!(requester_id: user6.id, friend_id: user8.id)
Friendship.create!(requester_id: user7.id, friend_id: user9.id)
Friendship.create!(requester_id: user7.id, friend_id: user10.id)

#demoUser Bills with Luis

luis1 = Bill.create!(description: "phone bill", date: Date.today, total_amt: 500, payer_id: demoUser.id)
split1 = Split.create!(debtor_id: user1.id, bill_id: luis1.id, amount_due: 200)
split2 = Split.create!(debtor_id: demoUser.id, bill_id: luis1.id, amount_due: 300)

Comment.create!(body: "damn that is expensive", author_id: demoUser.id, bill_id: luis1.id)
Comment.create!(body: "I know I dont wanna pay it", author_id: user1.id, bill_id: luis1.id)
Comment.create!(body: "thats cray", author_id: demoUser.id, bill_id: luis1.id)
Comment.create!(body: "I hate verizon", author_id: user1.id, bill_id: luis1.id)






luis2 = Bill.create!(description: "car insurance", date: Date.today, total_amt: 500, payer_id: demoUser.id)
split1 = Split.create!(debtor_id: user1.id, bill_id: luis2.id, amount_due: 100)
split2 = Split.create!(debtor_id: demoUser.id, bill_id: luis2.id, amount_due: 400)

luis3 = Bill.create!(description: "dinner date", date: Date.today, total_amt: 500, payer_id: user1.id)
split1 = Split.create!(debtor_id: user1.id, bill_id: luis3.id, amount_due: 450)
split2 = Split.create!(debtor_id: demoUser.id, bill_id: luis3.id, amount_due: 50)

luis4 = Bill.create!(description: "mealpal", date: Date.today, total_amt: 500, payer_id: user1.id)
split1 = Split.create!(debtor_id: user1.id, bill_id: luis4.id, amount_due: 500)
split2 = Split.create!(debtor_id: demoUser.id, bill_id: luis4.id, amount_due: 0)


## Demo Comments with Luis

comment1 = Comment.create!(body: "comment 1 bill 1", author_id: demoUser.id, bill_id: luis1.id)
comment2 = Comment.create!(body: "comment 2 bill 1", author_id: user1.id, bill_id: luis1.id)
comment3 = Comment.create!(body: "comment 3 bill 1", author_id: demoUser.id, bill_id: luis1.id)
comment4 = Comment.create!(body: "comment 4 bill 1", author_id: user1.id, bill_id: luis1.id)
#bills 2
comment1 = Comment.create!(body: "comment 1 bill 2", author_id: demoUser.id, bill_id: luis2.id)
comment2 = Comment.create!(body: "comment 1 bill 2", author_id: user1.id, bill_id: luis2.id)
comment3 = Comment.create!(body: "comment 1 bill 2", author_id: demoUser.id, bill_id: luis2.id)
comment4 = Comment.create!(body: "comment 1 bill 2", author_id: user1.id, bill_id: luis2.id)

#bill 3
comment1 = Comment.create!(body: "comment 1 bill 3", author_id: demoUser.id, bill_id: luis3.id)
comment2 = Comment.create!(body: "comment 2 bill 3", author_id: user1.id, bill_id: luis3.id)
comment3 = Comment.create!(body: "comment 3 bill 3", author_id: demoUser.id, bill_id: luis3.id)
comment4 = Comment.create!(body: "comment 4 bill 3", author_id: user1.id, bill_id: luis3.id)


#bill 4
comment1 = Comment.create!(body: "comment 1 bill 4", author_id: demoUser.id, bill_id: luis4.id)
comment2 = Comment.create!(body: "comment 2 bill 4", author_id: user1.id, bill_id: luis4.id)
comment3 = Comment.create!(body: "comment 3 bill 4", author_id: demoUser.id, bill_id: luis4.id)
comment4 = Comment.create!(body: "comment 4 bill 4", author_id: user1.id, bill_id: luis4.id)




## Demo Transactions with Luis

transaction1 = Transaction.create!(payer_id: user1.id , loaner_id: demoUser.id, amount_payed: 50 )
transaction2 = Transaction.create!(payer_id: user1.id , loaner_id: demoUser.id, amount_payed:  50)
transaction3 = Transaction.create!(payer_id: user1.id , loaner_id: demoUser.id, amount_payed:  100)
transaction4 = Transaction.create!(payer_id: user1.id , loaner_id: demoUser.id, amount_payed:  100)
transaction5 = Transaction.create!(payer_id: user1.id , loaner_id: demoUser.id, amount_payed: 20)

transaction5 = Transaction.create!(payer_id: demoUser.id , loaner_id: user1.id, amount_payed: 100)
transaction5 = Transaction.create!(payer_id: demoUser.id , loaner_id: user1.id, amount_payed: 100)
transaction5 = Transaction.create!(payer_id: demoUser.id , loaner_id: user1.id, amount_payed: 100)
transaction5 = Transaction.create!(payer_id: demoUser.id , loaner_id: user1.id, amount_payed: 100)
transaction5 = Transaction.create!(payer_id: demoUser.id , loaner_id: user1.id, amount_payed: 100)











#Demo bills with "mauricio"
mauricio1 = Bill.create!(description: "mauricio1", date: Date.today, total_amt: 100, payer_id: user2.id)
split1 = Split.create!(debtor_id: user2.id, bill_id: mauricio1.id, amount_due: 10)
split2 = Split.create!(debtor_id: demoUser.id, bill_id: mauricio1.id, amount_due: 90)

mauricio2 = Bill.create!(description: "mauricio2", date: Date.today, total_amt: 200, payer_id: user2.id)
split1 = Split.create!(debtor_id: user2.id, bill_id: mauricio2.id, amount_due: 150)
split2 = Split.create!(debtor_id: demoUser.id, bill_id: mauricio2.id, amount_due: 50)

mauricio3 = Bill.create!(description: "mauricio3", date: Date.today, total_amt: 300, payer_id: user2.id)
split1 = Split.create!(debtor_id: user2.id, bill_id: mauricio3.id, amount_due: 200)
split2 = Split.create!(debtor_id: demoUser.id, bill_id: mauricio3.id, amount_due: 100)

mauricio4 = Bill.create!(description: "mauricio4", date: Date.today, total_amt: 400, payer_id: demoUser.id)
split1 = Split.create!(debtor_id: user2.id, bill_id: mauricio4.id, amount_due: 250)
split2 = Split.create!(debtor_id: demoUser.id, bill_id: mauricio4.id, amount_due: 150)

#Demo Comments with Mauricio

#one bill 1
comment1 = Comment.create!(body: "comment 1 bill 1", author_id: user2.id, bill_id: mauricio1.id)
comment1 = Comment.create!(body: "comment 2 bill 1", author_id: user2.id, bill_id: mauricio1.id)
comment1 = Comment.create!(body: "comment 3 bill 1", author_id: user2.id, bill_id: mauricio1.id)
comment1 = Comment.create!(body: "comment 4 bill 1", author_id: demoUser.id, bill_id: mauricio1.id)
comment1 = Comment.create!(body: "comment 5 bill 1", author_id: user2.id, bill_id: mauricio1.id)

#comments bill 2
comment1 = Comment.create!(body: "comment 1 bill 2", author_id: demoUser.id, bill_id: mauricio2.id)
comment1 = Comment.create!(body: "comment 2 bill 2", author_id: user2.id, bill_id: mauricio2.id)
comment1 = Comment.create!(body: "comment 3 bill 2", author_id: user2.id, bill_id: mauricio2.id)
comment1 = Comment.create!(body: "comment 4 bill 2", author_id: demoUser.id, bill_id: mauricio2.id)
comment1 = Comment.create!(body: "comment 5 bill 2", author_id: user2.id, bill_id: mauricio2.id)

#comments bill 3
comment1 = Comment.create!(body: "comment 1 bill 3", author_id: demoUser.id, bill_id: mauricio3.id)
comment1 = Comment.create!(body: "comment 2 bill 3", author_id: user2.id, bill_id: mauricio3.id)
comment1 = Comment.create!(body: "comment 3 bill 3", author_id: user2.id, bill_id: mauricio3.id)
comment1 = Comment.create!(body: "comment 4 bill 3", author_id: demoUser.id, bill_id: mauricio3.id)
comment1 = Comment.create!(body: "comment 5 bill 3", author_id: user2.id, bill_id: mauricio3.id)


#comments bill 4
comment1 = Comment.create!(body: "comment 1 bill 4", author_id: demoUser.id, bill_id: mauricio4.id)
comment1 = Comment.create!(body: "comment 2 bill 4", author_id: user2.id, bill_id: mauricio4.id)
comment1 = Comment.create!(body: "comment 3 bill 4", author_id: user2.id, bill_id: mauricio4.id)
comment1 = Comment.create!(body: "comment 4 bill 4", author_id: demoUser.id, bill_id: mauricio4.id)
comment1 = Comment.create!(body: "comment 5 bill 4", author_id: user2.id, bill_id: mauricio4.id)



## Demo transactions with Mauricio

# one thousand paid by user 2 to demoUser
transactionM1 =  Transaction.create!(payer_id: user2.id , loaner_id: demoUser.id, amount_payed: 50 )
transactionM2 =  Transaction.create!(payer_id: user2.id , loaner_id: demoUser.id, amount_payed: 100 )
transactionM3 =  Transaction.create!(payer_id: user2.id , loaner_id: demoUser.id, amount_payed: 100 )
transactionM4 =  Transaction.create!(payer_id: user2.id , loaner_id: demoUser.id, amount_payed: 200 )
transactionM5 =  Transaction.create!(payer_id: user2.id , loaner_id: demoUser.id, amount_payed: 50 )
transactionM6 =  Transaction.create!(payer_id: user2.id , loaner_id: demoUser.id, amount_payed: 500 )


# paid by demoUser
transactionM1 =  Transaction.create!(payer_id: demoUser.id , loaner_id: user2.id, amount_payed: 10 )
transactionM2 =  Transaction.create!(payer_id: demoUser.id , loaner_id: user2.id, amount_payed: 20 )
transactionM3 =  Transaction.create!(payer_id: demoUser.id , loaner_id: user2.id, amount_payed: 30 )
transactionM4 =  Transaction.create!(payer_id: demoUser.id , loaner_id: user2.id, amount_payed: 40 )
transactionM5 =  Transaction.create!(payer_id: demoUser.id , loaner_id: user2.id, amount_payed: 50 )
transactionM6 =  Transaction.create!(payer_id: demoUser.id , loaner_id: user2.id, amount_payed: 60 )
