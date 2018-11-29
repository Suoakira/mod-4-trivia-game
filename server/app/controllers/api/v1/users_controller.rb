class Api::V1::UsersController < ApplicationController

    before_action :set_user, only: [:show]

    def index
        @users = User.all
        render json: @users
    end

    def show
      if @user
        render json: @user
      else
        render json: {error: 'User not found.'}, status: 400
      end
    end
    
    def create
      @user = User.new(user_params)
      if @user.save
        render json: @user
      else
        render json: {error: 'Unable to create user.'}, status: 400
      end
    end
             


    private

    def user_params
      params.require(:user).permit(:username)
    end  

    def set_user
        @user = User.find(params[:id])
    end

end
