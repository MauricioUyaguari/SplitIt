class Api::BillsController < ApplicationController

  def index
    @bills = current_user.bills

    if @bills
      render 'api/bills/index'
    else
      render json: {}
    end

  end


  def create
    @bill = Bill.new(bill_params)
    if @bill.save
      render 'api/bills/show'
    else
      render json: @bill.errors.full_messages, status: 422
    end
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
