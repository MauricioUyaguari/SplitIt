class Api::FriendsController < ApplicationController

  before_action :require_logged_in
  def index
    # you wan to show all the friends the current user has
    @friends = current_user.all_friends
    render 'api/friends/index'
  end


  def show

    @friend =  User.find(params[:id])
    if @friend && current_user
      render 'api/friends/show'
    else
      render json: ["Friend not found"], status: 404
    end
  end


  def create
    friend_id = params[:user][:id]
    @friendship = Friendship.new(requester_id: current_user.id, friend_id: friend_id)
    if @friendship.save
      @friend = User.find(@friendship.friend_id)
      render  json: ["Friend Request to #{@friend.email} has been send"]
    else
      render json: @friendship.errors.full_messages
    end
  end


  def update
    friendship = current_user.find_pending_friendship(params[:id].to_i)
    @friend = User.find(params[:id])
    friendship.update(accepted: true)
    if friendship && @friend
      render 'api/friends/show'
    else
      render json: ["an error has occured. Friendship not added"]
    end

  end


end
