class CreateBills < ActiveRecord::Migration[5.1]
  def change
    create_table :bills do |t|
      t.string :description, null: false
      t.date :date, null: false
      t.integer :payer_id, null: false
      t.decimal :total_amt, precision: 10, scale: 2, null: false
      t.timestamps
    end
  end
end
