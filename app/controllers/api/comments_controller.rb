class Api::CommentsController < ApplicationController

  before_action :require_logged_in

  def index
    @comments = current_user.comments
  end


  def show
    @comment = Comment.find(params[:id])
    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages
    end

  end


  def create
    @comment = Comment.new(comment_params)
  end


  def destroy
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :author_id, :bill_id)
  end






end
