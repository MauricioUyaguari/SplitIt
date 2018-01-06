class CreateBills < ActiveRecord::Migration[5.1]
  def change
    create_table :bills do |t|
       t.string :description

      t.timestamps
    end
  end
end
