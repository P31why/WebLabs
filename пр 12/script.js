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
function t2()
{
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