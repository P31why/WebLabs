var a=1;
function text_change() {
	if(a===1){
		var but=document.getElementById('button');
		but.value='Текст изменен';
		a=2;
	}
	else if(a===2){
		var but=document.getElementById('button');
		but.value='Текст';
		a=1;
	}
}
function fun1(){
	var sq=document.getElementById('input_num').value;
	alert('Результат вычислений: '+Math.pow(sq,2));
}