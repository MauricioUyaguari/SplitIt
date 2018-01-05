# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
user1 = User.new(email: "luis", password: "password", image_url: "test")
user2 = User.new(email: "mauricio", password: "password", image_url: "test")
user3 = User.new(email: "uyaguari", password: "password", image_url: "test")
user4 = User.new(email: "chica", password: "password", image_url: "test")
user5 = User.new(email: "nanci", password: "password", image_url: "test")
user6 = User.new(email: "german", password: "password", image_url: "test")
user7 = User.new(email: "dylan", password: "password", image_url: "test")
user8 = User.new(email: "javier", password: "password", image_url: "test")
user9 = User.new(email: "jason", password: "password", image_url: "test")
user10 = User.new(email: "steven", password: "password", image_url: "test")
user11 = User.new(email: "martha", password: "password", image_url: "test")
user12 = User.new(email: "cristina", password: "password", image_url: "test")
user13 = User.new(email: "jayden", password: "password", image_url: "test")
user14 = User.new(email: "ashely", password: "password", image_url: "test")

user1.save!
user2.save!
user3.save!
user4.save!
user5.save!
user6.save!
user7.save!
user8.save!
user9.save!
user10.save!
user11.save!
user12.save!
user13.save!
user14.save!


Friendship.destroy_all

friendship1 = Friendship.new(requester_id: user1.id, friend_id: user2.id)
friendship2 = Friendship.new(requester_id: user1.id, friend_id: user3.id)
friendship3 = Friendship.new(requester_id: user1.id, friend_id: user4.id)
friendship4 = Friendship.new(requester_id: user1.id, friend_id: user5.id)

friendship5 = Friendship.new(requester_id: user6.id, friend_id: user1.id)
friendship6 = Friendship.new(requester_id: user7.id, friend_id: user1.id)
friendship7 = Friendship.new(requester_id: user8.id, friend_id: user1.id)
friendship8 = Friendship.new(requester_id: user9.id, friend_id: user1.id)


friendship9 = Friendship.new(requester_id: user2.id, friend_id: user3.id)
friendship10 = Friendship.new(requester_id: user2.id, friend_id: user4.id)
friendship11 = Friendship.new(requester_id: user2.id, friend_id: user5.id)

friendship12 = Friendship.new(requester_id: user6.id, friend_id: user2.id)
friendship13 = Friendship.new(requester_id: user7.id, friend_id: user2.id)
friendship14 = Friendship.new(requester_id: user8.id, friend_id: user2.id)

friendship1.save!
friendship2.save!
friendship3.save!
friendship4.save!
friendship5.save!
friendship6.save!
friendship7.save!
friendship8.save!
friendship9.save!
friendship10.save!
friendship11.save!
friendship12.save!
friendship13.save!
friendship14.save!

user15 = User.new(email: "eh" , password: "password", image_url: "test")
user16 = User.new(email: "abg" , password: "password", image_url: "test")
user17 = User.new(email: "zu" , password: "password", image_url: "test")
user18 = User.new(email: "ajw" , password: "password", image_url: "test")
user19 = User.new(email: "abi" , password: "password", image_url: "test")
user20 = User.new(email: "gv" , password: "password", image_url: "test")
user21 = User.new(email: "jt" , password: "password", image_url: "test")
user22 = User.new(email: "ay" , password: "password", image_url: "test")
user23 = User.new(email: "rj" , password: "password", image_url: "test")
user24 = User.new(email: "yl" , password: "password", image_url: "test")
user25 = User.new(email: "ld" , password: "password", image_url: "test")
user26 = User.new(email: "kl" , password: "password", image_url: "test")
user27 = User.new(email: "vy" , password: "password", image_url: "test")
user28 = User.new(email: "pa" , password: "password", image_url: "test")
user29 = User.new(email: "akj" , password: "password", image_url: "test")
user30 = User.new(email: "akh" , password: "password", image_url: "test")
user31 = User.new(email: "fr" , password: "password", image_url: "test")
user32 = User.new(email: "pe" , password: "password", image_url: "test")
user33 = User.new(email: "ahi" , password: "password", image_url: "test")
user34 = User.new(email: "co" , password: "password", image_url: "test")
user35 = User.new(email: "aiu" , password: "password", image_url: "test")
user36 = User.new(email: "afv" , password: "password", image_url: "test")
user37 = User.new(email: "cg" , password: "password", image_url: "test")
user38 = User.new(email: "aci" , password: "password", image_url: "test")
user39 = User.new(email: "zg" , password: "password", image_url: "test")
user40 = User.new(email: "gs" , password: "password", image_url: "test")
user41 = User.new(email: "yr" , password: "password", image_url: "test")
user42 = User.new(email: "cd" , password: "password", image_url: "test")
user43 = User.new(email: "kf" , password: "password", image_url: "test")
user44 = User.new(email: "xv" , password: "password", image_url: "test")
user45 = User.new(email: "uf" , password: "password", image_url: "test")
user46 = User.new(email: "hu" , password: "password", image_url: "test")
user47 = User.new(email: "alg" , password: "password", image_url: "test")
user48 = User.new(email: "fa" , password: "password", image_url: "test")
user49 = User.new(email: "aar" , password: "password", image_url: "test")
user50 = User.new(email: "yb" , password: "password", image_url: "test")
user51 = User.new(email: "afq" , password: "password", image_url: "test")
user52 = User.new(email: "agi" , password: "password", image_url: "test")

user15.save!
user16.save!
user17.save!
user18.save!
user19.save!
user20.save!
user21.save!
user22.save!
user23.save!
user24.save!
user25.save!
user26.save!
user27.save!
user28.save!
user29.save!
user30.save!
user31.save!
user32.save!
user33.save!
user34.save!
user35.save!
user36.save!
user37.save!
user38.save!
user39.save!
user40.save!
user41.save!
user42.save!
user43.save!
user44.save!
user45.save!
user46.save!
user47.save!
user48.save!
user49.save!
user50.save!
user51.save!
user52.save!
