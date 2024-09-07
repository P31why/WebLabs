var a=1;
function color_change() {
	if(a===1){
		document.getElementsByClassName('text')[0].innerHTML ="red";
	}
}
function fun1(){
	var b=document.getElementById('input_num').value;
	alert(Math.Pow(b,2));
}