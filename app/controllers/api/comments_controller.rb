class Api::CommentsController < ApplicationController

  before_action :require_logged_in

  def index
    @comments = current_user.comments
  end


  def show
    @comment = Comment.find(params[:id])
  end


  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages
    end
  end


  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :author_id, :bill_id)
  end






end
