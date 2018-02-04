class Addcolumntofriendship < ActiveRecord::Migration[5.1]
  def change
    add_column :friendships, :accepted, :boolean, default: false
  end
end
