# friend show request will grab everything
#bills, splits and comments ids
bills_id = current_user.shared_bills(@friend).map{|bill| bill.id}
splits_id = current_user.shared_splits(@friend).map{|split| split.id}
comments_id = current_user.shared_comments(@friend).map{|comment| comment.id}

@bills = current_user.shared_bills(@friend)
@splits = current_user.shared_splits(@friend)
@comments = current_user.shared_comments(@friend)


json.friend do
  json.extract! @friend, :id, :email
  json.bills_id bills_id
  json.splits_id splits_id
  json.comments_id comments_id
end


json.bills do
  json.array! @bills, partial: 'api/bills/bill', as: :bill
end

json.splits do
  json.array! @splits, partial: 'api/splits/split', as: :split
end

json.comments do
  json.array! @comments, partial: 'api/comments/comment', as: :comment
end
