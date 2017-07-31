class CreateDanmus < ActiveRecord::Migration[5.0]
  def change
    create_table :danmus do |t|
			t.integer :room_id, default: 0, comment: '房间ID'
			t.string :chat_id, limit: 64, comment: '会话ID'
			t.integer :user_level, default: 0, comment: '用户级别'
			t.string :user_name, limit: 50, comment: '用户名'
			t.integer :fans_level, default: 0, comment: '粉丝级别'
			t.string :fans_name, limit: 50, comment: '粉丝名'
			t.string :content, limit: 128, comment: '弹幕内容'
      t.timestamps
    end
  end
end
