# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  image_url       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  has_many :in_friendships,-> { where "accepted = true" },
  foreign_key: :friend_id,
  class_name: :Friendship

  has_many :out_friendships,-> { where "accepted = true" },
    foreign_key: :requester_id,
    class_name: :Friendship


    has_many :in_friends,
    through: :in_friendships,
    source: :requester

    has_many :out_friends,
    through: :out_friendships,
    source: :friend



    has_many :pending_friendships,-> { where "accepted = false" },
    foreign_key: :friend_id,
    class_name: :Friendship

    has_many :pending_friends,
    through: :pending_friendships,
    source: :requester


    has_many :pending_friendships_requests, -> { where "accepted = false" },
    foreign_key: :requester_id,
    class_name: :Friendship

    has_many :request_friends,
    through: :pending_friendships_requests,
    source: :friend

    def find_pending_friendship(requestor_id)
      friend_id = self.id
      requester_id = requestor_id
      Friendship.where(friend_id: friend_id).where(requester_id: requester_id)
    end

    ## direct
    #bills
    has_many :paid_bills,
    foreign_key: :payer_id,
    class_name: :Bill

    #splits
    has_many :splits_due,
    foreign_key: :debtor_id,
    class_name: :Split


    #Assoicated
    has_many :bills,
    through: :splits_due,
    source: :bill
    # Assoicated Splits
    has_many :splits_on_paid_bills,
    through: :paid_bills,
    source: :splits

    #comments
    has_many :authored_comments,
    foreign_key: :author_id,
    class_name: :Comment


    # has many paid transactions

    has_many :incoming_transactions,
    foreign_key: :loaner_id,
    class_name: :Transaction

    has_many :outgoing_transactions,
    foreign_key: :payer_id,
    class_name: :Transaction


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
     BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end


  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end


  def self.find_by_creds(email, password)
    user = User.find_by(email: email)
    return nil unless user
    return user if user.is_password?(password)
    nil
  end

  #


  def all_friends
    all = self.in_friends + self.out_friends
  end

  def self.find_by_username(username)
    self.find_by(email: username)
  end


  def search(username)
    other = self.all_friends.map{|e| e.id} + [self.id] + self.pending_friends.map{|friend| friend.id} + self.request_friends.map{|friend| friend.id}
    User.where.not(id: other).where('email ~ ?', username)
  end




  def shared_bills(friend)
    other = friend.bills.map{|e| e.id}
    self.bills.where(id: other)
  end




  def shared_splits(friend)
    shared_bills_ids = self.shared_bills(friend).map{|el| el.id}
    Split.all.where(bill_id: shared_bills_ids)
  end

  def shared_comments(friend)
    shared_bills_id = self.shared_bills(friend).map{|bill| bill.id}
    Comment.all.where(bill_id: shared_bills_id)
  end


  def bills_not_assigned_to_pay
    self.bills - self.paid_bills
  end

  def balance_with(friend)
    bills = shared_bills(friend)
    result = 0
    bills.each do |bill|
      if bill.payer_id == self.id
        split = bill.splits.select{|split| split.debtor_id != bill.payer_id}
        split.each{|el| result += el.amount_due}
      else
        split = bill.splits.select{|split| split.debtor_id != bill.payer_id }
          split.each{|el| result -= el.amount_due}
      end
    end
    return result
  end




#balances
  def all_balances
    friends = self.all_friends
    balances = []

    friends.each do |friend|
      temp = [];
      temp.push(friend.id);
      temp.push(friend.email)
      temp.push(self.balance_with(friend))
      balances.push(temp)
    end
    return balances
  end

  def total_balance
    total = 0;
    all_balances = self.all_balances
    all_balances.each do |balance|
      total += balance[2]
    end
    return total
  end

  def you_owe
    total = 0;
    all_balances = self.all_balances
    all_balances.each do |balance|
      if balance[2] < 0
      total += balance[2]
      end
    end
    return total.abs
  end

  def you_are_owed
    total = 0;
    all_balances = self.all_balances
    all_balances.each do |balance|
      if balance[2] > 0
      total += balance[2]
      end
    end
    return total
  end


  ## with transactions
  def all_transactions
    self.incoming_transactions + self.outgoing_transactions
  end

  def shared_transactions(friend)
    other = friend.all_transactions.map{|trans| trans.id}
    mine = self.all_transactions.map{|trans| trans.id}
    union = other.select{|trans| mine.include?(trans)}
    Transaction.where(id: union)
  end


  # # total_balance with transactions
  # def transaction_balances(friend)
  #
  # end


  def balance_from_transactions(friend)
    transactions = self.shared_transactions(friend)
    amt = 0
    transactions.each do |transaction|
      if transaction.payer_id == self.id
        amt += transaction.amount_payed
      else
        amt -= transaction.amount_payed
      end
    end
    return amt
  end





  ####final balances with transactions

  def final_expenses_with_friend(friend)
    result = self.balance_from_transactions(friend) + self.balance_with(friend)
    return result
  end

  #balances
    def final_all_balances
      friends = self.all_friends
      final_balances = []

      friends.each do |friend|
        temp = [];
        temp.push(friend.id)
        temp.push(friend.email)
        temp.push(self.final_expenses_with_friend(friend))
        final_balances.push(temp)
      end
      return final_balances
    end


    def final_you_owe
      total = 0
      self.final_all_balances.each do |balance|
        if balance[2] < 0
        total += balance[2]
        end
      end
      return total
    end

    def final_you_are_owed
      total = 0
      self.final_all_balances.each do |balance|
        if balance[2] > 0
        total += balance[2]
        end
      end
      return total
    end


    def final_total_balance
      total = 0
      self.final_all_balances.each do |balance|
        total += balance[2]
      end
      return total
    end




    # detailed transactions for all activity

    def array_all_transactions
      result = [];
      transactions = self.all_transactions
      transactions.each do |transaction|
        temp = []
        temp.push(transaction.id)
        temp.push(transaction.payer_id)
        temp.push(transaction.loaner_id)
        temp.push(transaction.amount_payed)
        temp.push(transaction.created_at)
        result.push(temp)
      end
      return result;
    end


end
