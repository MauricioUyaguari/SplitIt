
@friends = current_user.all_friends
friends_id = @friends.map{|friend| friend.id}
@bills = current_user.bills
bills_id = @bills.map{|bill| bill.id}
@balances = current_user.all_balances





json.current_user do
  json.extract! current_user, :id, :email
  json.friends_id friends_id
  json.balances @balances
  json.totalBalance current_user.total_balance
  json.youOwe current_user.you_owe
  json.youAreOwed current_user.you_are_owed
  json.bills_id bills_id
end

json.friends do
  json.array! @friends, partial: 'api/users/user', as: :user
end

json.bills do
  json.array! @bills, partial: 'api/bills/bill', as: :bill
end
