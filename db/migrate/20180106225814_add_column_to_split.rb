class AddColumnToSplit < ActiveRecord::Migration[5.1]
  def change
    add_column :splits, :amount_due, :decimal, precision: 10, scale: 2, null: false
    rename_column :splits, :user_id, :debtor_id
  end
end
