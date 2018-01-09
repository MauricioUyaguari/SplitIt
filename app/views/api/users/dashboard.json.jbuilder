
@friends = current_user.all_friends
friends_id = @friends.map{|friend| friend.id}
@balances = current_user.all_balances





json.current_user do
  json.extract! current_user, :id, :email
  json.friends_id friends_id
  json.balances @balances
  json.totalBalance current_user.total_balance
  json.youOwe current_user.you_owe
  json.youAreOwed current_user.you_are_owed
end

json.friends do
  json.array! @friends, partial: 'api/users/user', as: :user
end
