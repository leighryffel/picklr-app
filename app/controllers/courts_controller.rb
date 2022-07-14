class CourtsController < ApplicationController

  skip_before_action :authorize

  def index
    courts = Court.all 
    render json: courts, status: :ok
  end
  
end
