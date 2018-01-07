class CreateSplits < ActiveRecord::Migration[5.1]
  def change
    create_table :splits do |t|
      t.integer :user_id, null: false
      t.integer :bill_id, null: false
      t.timestamps
    end
  end
end
