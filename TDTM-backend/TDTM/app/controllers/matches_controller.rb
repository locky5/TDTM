class MatchesController < ApplicationController

  def index
    matches = Match.all
    render json: matches
  end

  def show
    match = Match.find(params[:id])
    render json: match
  end

  def create
    match = Match.create(user_id: params[:user_id], user_id2: params[:user_id])
    render json: match
  end

end
