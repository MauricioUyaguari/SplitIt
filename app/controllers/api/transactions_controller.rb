class Api::TransactionsController < ApplicationController

  def new
  end

  def create

    @transaction = Transaction.new(transaction_params)
    if @transaction.save
      render 'api/transactions/show'
    else
      render json: @transaction.errors_full_messages, status: 422
    end
  end

  def show
    @transaction = Transaction.find(params[:id])
  end


  private

  def transaction_params
    params.require(:transaction).permit(:payer_id, :loaner_id, :amount_payed)
  end


end
