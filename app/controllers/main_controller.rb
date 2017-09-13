class MainController < ApplicationController
  def index
    @scores = Score.order("score")
    @score = Score.new()

  end

  def new
  end

  def create
  end

  def name_seset
    session[:name] = nil
  end

  def search
    @scores = Score.search(params[:difficulty])

    #redirect_to controller: :main, action: :index, scores: @scores
  end
end
