function t1(){
	var x1=document.form1.x.value;
	if(x1<6){
		document.form1.y.value=9999999;
	}
	else{
		var y1=Math.sqrt(x1-6);
		document.form1.y.value=y1;
	}
}
function t2(){
	var a=document.form2.a.value;
	var b=document.form2.b.value;
	var c=document.form2.c.value;
	if(a>b && a>c && b>c){
		document.form2.out.value="Заправить колонку C";
	}
	else if(b>a && a>c && a>c){
		document.form2.out.value="Заправить колонку A";
	}
	else if(c>a && c>b && a>b){
		document.form2.out.value="Заправить колонку B";
	}
	
}
function t3(){
	var a=parseInt(document.form3.a1.value);
	var n1=parseInt(a/100);
	var n2=parseInt(a/10%10);
	var n3=parseInt(a%10);
	if(n1===5 || n2===5 || n3===5){
		document.form3.out.value="Есть";
	}
	else {
		document.form3.out.value="Нет";
	}
}
function t4(){
	
}