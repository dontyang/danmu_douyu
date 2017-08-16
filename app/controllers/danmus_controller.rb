class DanmusController < ApplicationController

	def create
		danmu_params.each do |k, v|
			if v[:user_name].present? && v[:user_level].present?
				Danmu.create(v.slice(:room_id, :room_name, :chat_id, :fans_name)
											.merge(user_level: v[:user_level].gsub(/[^0-9]/, ''),
														 user_name: v[:user_name].gsub('：', '').to_s.strip,
														 content: v[:content].to_s.strip,
														 fans_level: v[:fans_level].to_i,
														 created_at: v[:created_at].to_time.localtime.to_s(:db)))
			end
		end
		render json: {result: :success}
	end

	private

	def danmu_params
		params.require(:data).permit!
	end

end