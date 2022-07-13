class SignupsController < ApplicationController
  def index
    signups = Signup.all
    render json: signups
  end

  def create
    signup = @current_user.signups.create!(signup_params)
    render json: signup, status: :created
  end

  private
  
  def signup_params
    params.permit(:time, :date, :court_id)
  end

end
