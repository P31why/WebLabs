function introDay(){
	var time=new Date();
	var hours=time.getHours();
	var text;
	if(hours>7 & hours<12)text='Доброе утро';
	else if(hours>12 & hours<17)text='Добрый день';
	else if(hours>17 & hours<0)text='Добрый вечер';
	else if(hours>0 & hours<7)text='Доброй ночи';
	alert(text);
}
function funcRes(){
	var x=parseFloat(document.form1.inputX.value);
	document.form1.resY.value=(x-1)/Math.pow(x,2);
}