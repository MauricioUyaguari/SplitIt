
@friends = current_user.all_friends
friends_id = @friends.map{|friend| friend.id}
@bills = current_user.bills
bills_id = @bills.map{|bill| bill.id}
@balances = current_user.final_all_balances

@pending_friends = current_user.pending_friends



json.current_user do
  json.extract! current_user, :id, :email
  json.friends_id friends_id
  json.balances @balances
  json.totalBalance current_user.final_total_balance
  json.youOwe current_user.final_you_owe
  json.youAreOwed current_user.final_you_are_owed
  json.bills_id bills_id
  json.all_transactions current_user.all_transactions
end

json.friends do
  json.array! @friends, partial: 'api/users/user', as: :user
end

json.bills do
  json.array! @bills, partial: 'api/bills/bill', as: :bill
end


json.pending_friends do
  json.array! @pending_friends, partial: 'api/users/user', as: :user
end
