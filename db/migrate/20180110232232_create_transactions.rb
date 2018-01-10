class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.integer :payer_id, null: false
      t.integer :loaner_id, null: false
      t.decimal :amount_payed, precision: 10, scale: 2, null: false

      t.timestamps
    end
  end
end
