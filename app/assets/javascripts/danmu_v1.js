// 会话ID缓存，重复的弹幕不发送到服务端
var chat_id_cache = []
// 定时器执行方法
function post_data(){
	// 解析html，获取数据
	$(".jschartli.hy-chat").each(function(){
		var chat_icon_pads = $(this).find('.chat-icon-pad');
		var fans_level = '';
		var fans_name = '';
		if(chat_icon_pads.length == 2){
			var badge = chat_icon_pads.first();
		  fans_level = badge.find('.fans-badge-icon').data().uiLevel;
		  fans_name = badge.find('i').html();
		}
		var user_level = chat_icon_pads.last().attr('title');
		var user_name = $(this).find('.nick.js-nick').html();
		var content = $(this).find('.chat-msg-item').html();
		var chat_id = $(this).find('.chat-msg-item').attr('chatid');
		var room_name = $ROOM.room_name;
		var room_id = $ROOM.room_id;
		// 缓存会话ID，500条以后清理一次
		if(!chat_id_cache.includes(chat_id)){
			chat_id_cache.push(chat_id)
			// 组装数据发送至服务端存储
		  $.ajax({
			  url : 'https://localhost/danmus',
			  type : 'post',
			  dataType : 'json',
			  data : {user_level: user_level, user_name: user_name, content: content, chat_id: chat_id, fans_name: fans_name, fans_level: fans_level, room_name: room_name, room_id: room_id }
			});
		}
		if(chat_id_cache.length >= 500){
			chat_id_cache = chat_id_cache.slice(chat_id_cache.length-50, chat_id_cache.length-1)
		}

	});
}
// 定时任务，一秒执行一次
setInterval("post_data();", 1000);

