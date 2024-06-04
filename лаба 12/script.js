
start();
function start(){
	var i=30;
	let tim=setInterval(()=>{
	i--;
	form1.Time.value=i;
	},1000);
	setTimeout(() => { clearInterval(tim); alert('stop'); },i*1000);
}
