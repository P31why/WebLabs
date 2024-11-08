
start();
function start(){
	var i=parseInt(document.getElementById("ty"));;
	var te=parseInt(document.getElementById("ty"));
	let tim=setInterval(()=>{
	if(i===0){
		clearInterval(tim);}
		else{
			i--;
			te.textContent=i;
		}
	},1000);
}
function addInList(){
	 var list = document.getElementById("list");
	 var el=document.form1.inputEl.value;
	 list.innerHTML += "<li>"+el+"</li>";
}