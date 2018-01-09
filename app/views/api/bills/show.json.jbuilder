

splits_id = @bill.splits.map{|split| split.id}
comments_id = @bill.comments.map{|comment| comment.id}
debtors_id = @bill.debtors.map{|debtor| debtor.id}


@splits = @bill.splits
@comments = @bill.comments
@debtors = @bill.debtors


# friend associated with bill
@friend = @debtors.select{|el| el.id != current_user.id}

json.bill do
  json.partial! 'api/bills/bill', bill: @bill
  json.splits_id splits_id
  json.comments_id comments_id
  json.debtors_id debtors_id
end



json.friend do
  json.array!  @friend, partial: 'api/users/user', as: :user
end

json.splits do
  json.array! @splits, partial: 'api/splits/split', as: :split
end

json.comments do
  json.array! @comments, partial: 'api/comments/comment', as: :comment
end
