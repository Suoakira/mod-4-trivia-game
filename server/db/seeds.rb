# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(username: 'Steve')
User.create(username: 'Johnny')
User.create(username: 'Amalie')
User.create(username: 'Olly')
User.create(username: 'Ryan')

Score.create(score: 100, user_id: 1)
Score.create(score: 35, user_id: 2)
Score.create(score: 78, user_id: 3)
Score.create(score: 22, user_id: 4)
Score.create(score: 26, user_id: 5)



Comment.create(comment: 'test1!', user_id: 1)
Comment.create(comment: 'test2', user_id: 3)
Comment.create(comment: 'test3', user_id: 3)
Comment.create(comment: 'test4', user_id: 2)
Comment.create(comment: 'test5', user_id: 4)
Comment.create(comment: 'test6', user_id: 5)
Comment.create(comment: 'test7', user_id: 5)