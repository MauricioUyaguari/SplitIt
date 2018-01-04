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


  has_many :in_friendships,
  foreign_key: :friend_id,
  class_name: :Friendship

  has_many :out_friendships,
    foreign_key: :requester_id,
    class_name: :Friendship

    has_many :in_friends,
    through: :in_friendships,
    source: :requester

    has_many :out_friends,
    through: :out_friendships,
    source: :friend

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
    self.in_friends + self.out_friends
  end

  def self.find_by_username(username)
    self.find_by(email: username)
  end




end
