
start();
function start(){
	var i=document.form1.input.value;
	let tim=setInterval(()=>{
	i--;
	document.form1.Time.value=i;
	},1000);
	setTimeout(() => { clearInterval(tim); alert('stop'); },i*1000);
}
function addInList(){
	 var list = document.getElementById("list");
	 var el=document.form1.inputEl.value;
	 list.innerHTML += "<li>"+el+"</li>";
}