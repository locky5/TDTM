class AuthController < ApplicationController

  def login
    user = User.find_by(name: params[:name])

    if user && user.authenticate(params[:password])
        # token = encode_token(user.id)
      render json: user
    else
      render json: {errors: "Login Failed"}
    end
  end

  def auto_login
    user = User.find_by(id: request.headers["Authorization"])
    if user
      render json: user
    else
      render json: {errors: "User not found"}
    end
  end

end
