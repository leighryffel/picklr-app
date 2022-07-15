
class ReservationsController < ApplicationController
  
  skip_before_action :authorize
  
  def index
    reservations = Reservation.all 
    render json: reservations
  end

  def show
    reservation = Reservation.find_by(params[:user_id])
    if reservation
      render json: reservation, status: :ok
    else
      render json: { error: "Reservation not found"}, status: :not_found
    end
  end

  def create
    reservation = Reservation.create!(reservation_params)
    render json: reservation, status: :created
  end

  def destroy
    reservation = Reservation.find(params[:id])
    reservation.destroy
    render head: :no_content
  end

  private
  
  def reservation_params
    params.permit(:time, :date, :court_id, :user_id)
  end
  
end
