function calc(rad){
	var rad=parseFloat(rad);
	var s=Math.pow(rad,2)*Math.PI;
	document.data.result.value=s;
}
function timer() {
setTimeout("alert('Время истекло!')", 5000);
}
var msg = "Бегущая строка ";

function scrollMsg(){
var msg = "Бегущая строка ";
document.data.Msg.value = msg;
msg=msg.substring(1,msg.length)+msg.substring(0,1);
setTimeout("scrollMsg()", 150);
}
