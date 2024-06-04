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
function scrollMsg2(){
	var msg = "Бегущая строка ";
	setInterval(()=>{document.data.Msg.value = msg;
	msg=msg.substring(1,msg.length)+msg.substring(0,1);}, 150);
}
let ind;
var status=false;
Clocker();
function Clocker(){
	
	ind=setInterval(()=>{
		var dat=new Date();
		var hour=dat.getHours();
		var min=dat.getMinutes();
		var sec=dat.getSeconds();
		document.data.dateTime.value=hour+":"+min+":"+sec;},1000);
}
function StartTime(){
	
	if(status===true){
		document.data.startB.value="Start";
		status=false;
		//setTimeout(() => { clearInterval(ind); alert('stop'); },1000);
	}
	if(status===false){
		document.data.startB.value="Stop";
		status=true;
		//Clocker();
	}
}
function StopTime(){
	
}