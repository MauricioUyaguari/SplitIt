@people_on_it = @transaction.people_on_it
persons_id = @people_on_it.map{|person| person.id}


@friend = @people_on_it.select{|person| person.id != current_user.id}




json.transaction do
  json.partial! 'api/transactions/transaction', transaction: @transaction
  json.people persons_id

end

json.friend do
  json.array!  @friend, partial: 'api/users/user', as: :user
end
