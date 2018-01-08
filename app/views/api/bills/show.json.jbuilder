json.partial! "api/bills/bill", bill: @bill


@splits = @bill.splits

json.splits do
  json.array! @splits, partial: 'api/splits/split', as: :split
end
