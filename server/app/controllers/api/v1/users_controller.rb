class Api::V1::UsersController < ApplicationController

    def index 
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user
            render json: @user
        else
            render json: {error: "Unable to Create User"}
        end
    end

    private

    def user_params
      params.require(:user).permit(:username)
    end  

end
