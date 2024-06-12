var znach=[];
var func =[];
introDay();
function introDay(){
	var time=new Date();
	var hours=(time.getHours()*100)+time.getMinutes();
	var text;
	if(hours>700 & hours<=1200)text='Доброе утро';
	else if(hours>1200 & hours<=1700)text='Добрый день';
	else if(hours>1700 & hours!>0)text='Добрый вечер';
	else if(hours>0 & hours<=700)text='Доброй ночи';
	alert(text);
}
function funcRes(){
	var table=document.getElementById("table1");
	var start=parseFloat(document.form1.input1.value);
	var end=parseFloat(document.form1.input2.value);
	var step=parseFloat(document.form1.input3.value);
	if(start<end & (step<start | step>=start & step<end) & step>0 & start>0 & end>0){
		table.innerHTML="<tr><th> x </th><th>y</th></tr>";
		for(var i=start;i<end;i+=step){
			var y=(i-1)/Math.pow(i,2);
			table.innerHTML += "<tr><td>" + i + "</td><td>" + y + "</td></tr>";
			znach.push(i);
			func.push(y);
		}
		alert("Элименты массива znach: "+znach);
		alert("Элименты массива func: "+func);
	}else alert("Ошибка");
	
}