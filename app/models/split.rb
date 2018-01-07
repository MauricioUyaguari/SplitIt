# == Schema Information
#
# Table name: splits
#
#  id         :integer          not null, primary key
#  debtor_id  :integer          not null
#  bill_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  amount_due :decimal(10, 2)   not null
#

class Split < ApplicationRecord

  validates :debtor_id, :bill_id, presence: true

  belongs_to :bill,
  foreign_key: :bill_id,
  class_name: :Bill

  belongs_to :debtor,
  foreign_key: :debtor_id,
  class_name: :User



end
