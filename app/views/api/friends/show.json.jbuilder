bills_id = current_user.shared_bills(@friend).map{|bill| bill.id}
splits_id = current_user.shared_splits(@friend).map{|split| split.id}

@bills = current_user.shared_bills(@friend)
@splits = current_user.shared_splits(@friend)

json.friend do
  json.extract! @friend, :id, :email
  json.bills_id bills_id
  json.splits_id splits_id
end


json.bills do
  json.array! @bills, partial: 'api/bills/bill', as: :bill
end

json.splits do
  json.array! @splits, partial: 'api/splits/split', as: :split
end
