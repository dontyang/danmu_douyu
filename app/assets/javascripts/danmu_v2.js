var cache_msg = [];
// 监听DOM变换，新增弹幕时触发
var obs = new MutationObserver(function(mutations) { 
	mutations.forEach(function(mutation) { 
    if(mutation.addedNodes.length > 0){
    	mutation.addedNodes.forEach(function(el){
    		var chat_icon_pads = $(el).find('.chat-icon-pad');
				var fans_level = '';
				var fans_name = '';
				if(chat_icon_pads.length == 2){
					var badge = chat_icon_pads.first();
				  fans_level = badge.find('.fans-badge-icon').data().uiLevel;
				  fans_name = badge.find('i').html();
				}
				var user_level = chat_icon_pads.last().attr('title');
				var user_name = $(el).find('.nick.js-nick').html();
				var content = $(el).find('.chat-msg-item').html();
				var chat_id = $(el).find('.chat-msg-item').attr('chatid');
				var room_name = $ROOM.room_name;
				var room_id = $ROOM.room_id;
				// 存储数据
				cache_msg.push({user_level: user_level, user_name: user_name, content: content, chat_id: chat_id, fans_level: fans_level, fans_name: fans_name, room_name: room_name, room_id: room_id, created_at: new Date()})
    		// 每20条发送一次数据至服务端
    		if(cache_msg.length == 20){
				  $.ajax({
					  url : 'https://localhost/danmus',
					  type : 'post',
					  dataType : 'json',
					  data : {data: cache_msg}
					});
					cache_msg = [];
    		}
    	});
    }
  }); 
}); 

obs.observe(document.querySelector("#js-chat-cont > div.chat-cont-wrap > ul"), { childList: true, subtree: true });