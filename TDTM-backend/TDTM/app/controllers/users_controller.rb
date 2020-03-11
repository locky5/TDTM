class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    user = User.new(name: params[:name], password: params[:password], age: params[:age], gender: params[:gender], genderpreference: params[:genderpreference], education: params[:education], height: params[:height], description: params[:description], photo_url: params[:photo_url])
    if user.save
      render json: user
    else
      render json: {errors: user.errors.full_messages}
    end
  end

end
