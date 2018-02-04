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
      render '/api/friends/show'
    else
      render json: @friendship.errors.full_messages
    end
  end


  def update
    
  end


end
