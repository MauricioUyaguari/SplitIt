class Api::UsersController < ApplicationController


  def create
    @user = User.new(user_params)
    @user.image_url = "a"
    # To DO this will change once we have images randomly assigned

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def search

    search = params[:query]
    results = current_user.search(search)
    if search.present? && results
      @users  = results
      render 'api/friends/index'
    else
      @users = User.none
      render json: {}
    end

  end



  def user_params
    params.require(:user).permit(:email, :password, :image_url)
  end
end
