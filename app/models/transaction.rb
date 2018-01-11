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

  validates :payer_id, :loaner_id, :amount_payed, presence: true
  validate :check_payer_and_loaner

  belongs_to :payer,
  foreign_key: :payer_id,
  class_name: :User

  belongs_to :loaner,
  foreign_key: :loaner_id,
  class_name: :User

  def check_payer_and_loaner
    errors.add(:loaner_id, "you can't pay yourself") if payer_id == loaner_id
  end



  def people_on_it
    people = [self.payer_id] + [self.loaner_id]
    User.where(id: people)
  end


end
