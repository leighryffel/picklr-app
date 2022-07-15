class UsersController < ApplicationController

  skip_before_action :authorize, only: :create

  def index
    users = User.all
    render json: users, status: :ok
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: User.find(session[:user_id])
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end
