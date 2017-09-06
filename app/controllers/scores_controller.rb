class ScoresController < ApplicationController

  def index
    @scores = Score.order(score: :asc)

  end

  def show
    @scores = Score.search(params[:difficulty])
    if @scores.blank?
      @scores = Score.search("easy")
    end
    @scores.order(score: :asc)
  end

  def new
  end

  def edit
  end

  def create
    @score = Score.new(params[:score])
    if @score.save
      redirect_to root_path, notice: "登録されました。"
    else
      redirect_to root_path, notice: "登録に失敗しました。"
    end
  end
  
  def update
  end

  def destroy
  end

  def search
    @scores = Score.search(params[:difficulty]).order(score: :asc)
    render "show"
    #redirect_to controller: :main, action: :index, scores: @scores
  end

end
