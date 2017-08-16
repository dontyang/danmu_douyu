// 自动发送弹幕7秒一次
var index = 1;
var str = "";
// 发送弹幕
function send_danmu(){
	if($("#js-send-msg > div.b-btn").attr('class') == "b-btn"){
		$("#js-send-msg > textarea").val(str + index);
		$("#js-send-msg > div.b-btn").click();
		index = index + 1;
	}
}
// 定时发送
setInterval("send_danmu();", 1 * 1000);