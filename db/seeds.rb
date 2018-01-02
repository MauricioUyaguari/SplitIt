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
user8 = User.new(email: "lia", password: "password", image_url: "test")

user1.save!
user2.save!
user3.save!
user4.save!
user5.save!
user6.save!
user7.save!
user8.save!
