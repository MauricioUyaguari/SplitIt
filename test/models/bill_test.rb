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

require 'test_helper'

class BillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
