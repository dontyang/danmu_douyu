class DanmusController < ApplicationController

	def create
		danmu = Danmu.new(danmu_params.slice(:room_id, :room_name, :chat_id, :fans_name))
		danmu.user_level = danmu_params[:user_level].gsub(/[^0-9]/, '')
		danmu.user_name = danmu_params[:user_name].gsub('：', '').to_s.strip
		danmu.content = danmu_params[:content].to_s.strip
		danmu.fans_level = danmu_params[:fans_level].to_i
		danmu.save
		render json: {result: :success}
	end

	private

	def danmu_params
		params.permit(:user_level, :user_name, :content, :chat_id, :fans_name, :fans_level, :room_name, :room_id)
	end

end