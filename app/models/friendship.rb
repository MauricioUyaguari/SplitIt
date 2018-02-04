# == Schema Information
#
# Table name: friendships
#
#  id           :integer          not null, primary key
#  requester_id :integer          not null
#  friend_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  accepted     :boolean          default(FALSE)
#

class Friendship < ApplicationRecord

  validates :requester_id, :friend_id, presence: true
  validates :requester_id, uniqueness: { scope: :friend_id  }

  validate :cannot_friend_yourself

  belongs_to :requester,
  foreign_key: :requester_id,
  class_name: :User

  belongs_to :friend,
  foreign_key: :friend_id,
  class_name: :User

  private

  def cannot_friend_yourself
    errors.add(:friend_id, 'You cannot add yourself as a friend.') if friend_id == requester_id
  end

end
