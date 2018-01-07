class Api::BillsController < ApplicationController

  def index

  end


  def create
  end


  def edit
  end

  def destroy
  end

  def index

    @bills = current_user.bills
    if @bills
      render 'api/bills/index'
    else
      render json: {}
    end

  end

  private

  def bill_params
    params.require(:bill).permit(:description, :date, :payer_id, :total_amt)
  end




end
