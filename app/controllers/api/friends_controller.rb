class Api::FriendsController < ApplicationController

  def index
    # you wan to show all the friends the current user has
    @friends = current_user.friends
    render :index
  end

  def show
    @friend = Friend.find(params[:id])
  end

  def create
    @friend = User.find_by_username(friends_params)
    @friendship = Friendship.new(requester_id: current_user.id, friend_id: @friend.id)

    if @friend && @friendship.save
      render :show
    else
      render json: @friendship.erros.full_messages
  end





  end

  private

  def friends_params
    params.require(:friendship).permit(:username)
  end
end
