# == Schema Information
#
# Table name: bills
#
#  id          :integer          not null, primary key
#  description :string           not null
#  date        :date             not null
#  payer_id    :integer          not null
#  total_amt   :decimal(10, 2)   not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bill < ApplicationRecord

  validates :description, :date, :payer_id, presence: true

  belongs_to :payer,
  foreign_key: :payer_id,
  class_name: :User

  has_many :splits,
  foreign_key: :bill_id,
  class_name: :Split


  #
  has_many :debtors,
  through: :splits,
  source: :debtor

end
