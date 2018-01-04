class Api::FriendsController < ApplicationController

  # before_action :require_logged_in
  def index
    # you wan to show all the friends the current user has
    @users = current_user.all_friends
    render 'api/friends/index'
  end


  def create

    friend_id = params[:user][:id]
    @friendship = Friendship.new(requester_id: current_user.id, friend_id: friend_id)
    if @friendship.save
      @user = User.find(@friendship.friend_id)
      render '/api/users/show'
    else
      render json: @friendship.errors.full_messages
    end
  end


end
