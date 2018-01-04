class Api::FriendsController < ApplicationController

  def index
    # you wan to show all the friends the current user has
    @friends = current_user.friends
  end

  def show
    @friend = Friend.find(params[:id])

  end

  def create
  end

  private

  def friends_params
  end
end
