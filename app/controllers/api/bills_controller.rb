class Api::BillsController < ApplicationController
  before_action :require_logged_in
  def index
    @bills = current_user.bills

    if @bills
      render 'api/bills/index'
    else
      render json: {}
    end

  end
  def show
    @bill = Bill.find(params[:id])
  end


  def create
    @bill = Bill.new(bill_params)

    if @bill.save == false
      render json: @bill.errors.full_messages, status: 422
    end

    @split1 = Split.new(debtor_id: current_user.id, bill_id: @bill.id, amount_due: params[:bill][:split_due])
    friend_amt_due = @bill.total_amt - params[:bill][:split_due].to_f
    @split2 = Split.new(debtor_id: params[:bill][:friend_id], bill_id: @bill.id, amount_due: friend_amt_due)

    if  @split1.save & @split2.save
      render 'api/bills/show'
    else
      render json: @split1.errors.full_messages + @split2.errors.full_messages, status: 422
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
