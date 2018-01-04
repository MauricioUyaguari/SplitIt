class CreateCreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :createfriends do |t|
      t.integer :requester_id, null: false
      t.integer :friend_id, null: false
      t.timestamps
    end
  end
end
