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
user11 = User.create!(email: "Jayden", password: "password", image_url: "test")
user1 = User.create!(email: "Mauricio", password: "password", image_url: "test")
user2 = User.create!(email: "Jason", password: "password", image_url: "test")
user3 = User.create!(email: "Dylan", password: "password", image_url: "test")
user4 = User.create!(email: "Dae", password: "password", image_url: "test")
user5 = User.create!(email: "Nanci", password: "password", image_url: "test")
user6 = User.create!(email: "German", password: "password", image_url: "test")
user7 = User.create!(email: "Uyaguari", password: "password", image_url: "test")
user8 = User.create!(email: "Javier", password: "password", image_url: "test")
user9 = User.create!(email: "Martha", password: "password", image_url: "test")
user10 = User.create!(email: "Steven", password: "password", image_url: "test")
user12 = User.create!(email: "Cristina", password: "password", image_url: "test")
user13 = User.create!(email: "Flo", password: "password", image_url: "test")
user14 = User.create!(email: "Kj", password: "password", image_url: "test")
user15 = User.create!(email: "Giselle", password: "password", image_url: "test")
user16 = User.create!(email: "Romero", password: "password", image_url: "test")
user17 = User.create!(email: "Jose", password: "password", image_url: "test")
user18 = User.create!(email: "Jonnathan", password: "password", image_url: "test")



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
Friendship.create!(requester_id: demoUser.id, friend_id: user11.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user12.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user13.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user14.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user15.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user16.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user17.id)
Friendship.create!(requester_id: demoUser.id, friend_id: user18.id)


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

#demoUser Bills with Mauricio

#bill mauricio 1 #demo Paid
mauricio1 = Bill.create!(description: "phone bill", date: Date.today, total_amt: 500, payer_id: demoUser.id)
split1 = Split.create!(debtor_id: user1.id, bill_id: mauricio1.id, amount_due: 200)
split2 = Split.create!(debtor_id: demoUser.id, bill_id: mauricio1.id, amount_due: 300)

Comment.create!(body: "damn that is expensive", author_id: demoUser.id, bill_id: mauricio1.id)
Comment.create!(body: "I know I dont wanna pay it", author_id: user1.id, bill_id: mauricio1.id)
Comment.create!(body: "thats cray", author_id: demoUser.id, bill_id: mauricio1.id)
Comment.create!(body: "I hate verizon", author_id: user1.id, bill_id: mauricio1.id)

#demo paid bill2
mauricio2 = Bill.create!(description: "car insurance", date: Date.today, total_amt: 500, payer_id: demoUser.id)
split1 = Split.create!(debtor_id: user1.id, bill_id: mauricio2.id, amount_due: 100)
split2 = Split.create!(debtor_id: demoUser.id, bill_id: mauricio2.id, amount_due: 400)

Comment.create!(body: "Paid the car insurance. you owe me 400.", author_id: demoUser.id, bill_id: mauricio2.id)
Comment.create!(body: "iight", author_id: user1.id, bill_id: mauricio2.id)
Comment.create!(body: "any day now", author_id: demoUser.id, bill_id: mauricio2.id)
Comment.create!(body: "hello...", author_id: demoUser.id, bill_id: mauricio2.id)

#bill 3
mauricio3 = Bill.create!(description: "dinner", date: Date.today, total_amt: 100, payer_id: user1.id)
split1 = Split.create!(debtor_id: user1.id, bill_id: mauricio3.id, amount_due: 100)
split2 = Split.create!(debtor_id: demoUser.id, bill_id: mauricio3.id, amount_due: 0)

Comment.create!(body: "yup", author_id: demoUser.id, bill_id: mauricio3.id)
Comment.create!(body: "Mauricio is coolio cause he pay for me bro", author_id: demoUser.id, bill_id: mauricio3.id)
Comment.create!(body: "nahh bro", author_id: user1.id, bill_id: mauricio3.id)
Comment.create!(body: "okay fine", author_id: user1.id, bill_id: mauricio3.id)

#bill 4
mauricio4 = Bill.create!(description: "party night booze", date: Date.today, total_amt: 600, payer_id: user1.id)
split1 = Split.create!(debtor_id: user1.id, bill_id: mauricio4.id, amount_due: 300)
split2 = Split.create!(debtor_id: demoUser.id, bill_id: mauricio4.id, amount_due: 300)

Comment.create!(body: "this includes booze and more booze right?", author_id: demoUser.id, bill_id: mauricio4.id)
Comment.create!(body: "why yes it does", author_id: user1.id, bill_id: mauricio4.id)
Comment.create!(body: "fine will get it to you by next wednesday", author_id: demoUser.id, bill_id: mauricio4.id)
Comment.create!(body: "okay fine", author_id: user1.id, bill_id: mauricio4.id)

#Mauricio paid you 50
Transaction.create!(payer_id: user1.id , loaner_id: demoUser.id, amount_payed: 50 )
Transaction.create!(payer_id: user1.id , loaner_id: demoUser.id, amount_payed: 25 )
##Mauricio ends up owing you 25


#bill with Jayden
dylan1 = Bill.create!(description: "watch", date: Date.today, total_amt: 250, payer_id: user11.id)
split1 = Split.create!(debtor_id: demoUser.id, bill_id: dylan1.id, amount_due: 100)
split2 = Split.create!(debtor_id: user11.id, bill_id: dylan1.id, amount_due: 150)




#bill with Dylan
dylan1 = Bill.create!(description: "moving in stuff", date: Date.today, total_amt: 100, payer_id: user3.id)
split1 = Split.create!(debtor_id: user3.id, bill_id: dylan1.id, amount_due: 50)
split2 = Split.create!(debtor_id: demoUser.id, bill_id: dylan1.id, amount_due: 50)

#bill with Jason
dylan1 = Bill.create!(description: "fifa video game", date: Date.today, total_amt: 150, payer_id: user2.id)
split1 = Split.create!(debtor_id: demoUser.id, bill_id: dylan1.id, amount_due: 100)
split2 = Split.create!(debtor_id: user2.id, bill_id: dylan1.id, amount_due: 50)
Transaction.create!(payer_id: demoUser.id , loaner_id: user2.id, amount_payed: 25 )

#bill with Dae
dylan1 = Bill.create!(description: "Meal Pal", date: Date.today, total_amt: 80, payer_id: user4.id)
split1 = Split.create!(debtor_id: demoUser.id, bill_id: dylan1.id, amount_due: 60)
split2 = Split.create!(debtor_id: user4.id, bill_id: dylan1.id, amount_due: 20)
Transaction.create!(payer_id: demoUser.id , loaner_id: user4.id, amount_payed: 20 )

#bill with Nanci
dylan1 = Bill.create!(description: "My new Car", date: Date.today, total_amt: 200, payer_id: demoUser.id)
split1 = Split.create!(debtor_id: demoUser.id, bill_id: dylan1.id, amount_due: 50)
split2 = Split.create!(debtor_id: user5.id, bill_id: dylan1.id, amount_due: 150)
Transaction.create!(payer_id: user5.id , loaner_id: demoUser.id, amount_payed: 50 )

#bill with German
dylan1 = Bill.create!(description: "Shoes", date: Date.today, total_amt: 175, payer_id: demoUser.id)
split1 = Split.create!(debtor_id: demoUser.id, bill_id: dylan1.id, amount_due: 50)
split2 = Split.create!(debtor_id: user6.id, bill_id: dylan1.id, amount_due: 125)
Transaction.create!(payer_id: user6.id , loaner_id: demoUser.id, amount_payed: 45 )


#bill with kj
dylan1 = Bill.create!(description: "coffee", date: Date.today, total_amt: 10, payer_id: demoUser.id)
split1 = Split.create!(debtor_id: demoUser.id, bill_id: dylan1.id, amount_due: 5)
split2 = Split.create!(debtor_id: user14.id, bill_id: dylan1.id, amount_due: 5)


#bill with flo
dylan1 = Bill.create!(description: "guitar", date: Date.today, total_amt: 50, payer_id: demoUser.id)
split1 = Split.create!(debtor_id: demoUser.id, bill_id: dylan1.id, amount_due: 30)
split2 = Split.create!(debtor_id: user13.id, bill_id: dylan1.id, amount_due: 20)
