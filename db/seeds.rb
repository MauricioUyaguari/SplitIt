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
