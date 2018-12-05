class Api::V1::ScoresController < ApplicationController
  
        
    def index 
        @scores = Score.all
        render json: @scores
    end

    def show
        if @score
            render json: @score
        else
            render json: {error: 'Unable to find score'}, status: 400
        end
    end

    def create
        @score = Score.new(score_params)
        if @score.save
          render json: @score
        else
          render json: {error: 'Unable to create score.'}, status: 400
        end
      end

    private

    def score_params
      params.require(:score).permit(:score, :user_id)
    end

    def set_score
      @score = Score.find(params[:id])
    end

end
