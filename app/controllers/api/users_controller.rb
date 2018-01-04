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
    if params[].present?
      @users = User.where('email ~ ?', params[:query])
      render 'api/friends/index'
    else
      @users = User.none
      render 'api/friends/index'
    end

  end



  def user_params
    params.require(:user).permit(:email, :password, :image_url)
  end
end
