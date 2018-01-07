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

require 'test_helper'

class SplitTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
