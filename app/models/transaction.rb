# == Schema Information
#
# Table name: transactions
#
#  id           :integer          not null, primary key
#  payer_id     :integer          not null
#  loaner_id    :integer          not null
#  amount_payed :decimal(10, 2)   not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Transaction < ApplicationRecord

  validates :payer_id, :loaner_id, presence: true

  belongs_to :payer,
  foreign_key: :payer_id,
  class_name: :User

  belongs_to :loaner,
  foreign_key: :loaner_id,
  class_name: :User

end
