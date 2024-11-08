function t1(){
	var x1=document.form1.x.value;
	if(x1<6){
		document.form1.y.value="error";
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
	var day=parseInt(document.form4.a.value);
	switch (day) {
                case 1:
                    document.form4.out.value = "воскресенье";
                    break;
                case 2:
                    document.form4.out.value = "понедельник";
                    break;
                case 3:
                    document.form4.out.value = "вторник";
                    break;
                case 4:
                    document.form4.out.value = "среда";
                    break;
                case 5:
                    document.form4.out.value = "четверг";
                    break;
                case 6:
                    document.form4.out.value = "пятница";
                    break;
                case 7:
                    document.form4.out.value = "суббота";
                    break;
                case 8:
                    document.form4.out.value = "воскресенье";
                    break;
                case 9:
                    document.form4.out.value = "понедельник";
                    break;
                case 10:
                    document.form4.out.value = "вторник";
                    break;
                case 11:
                    document.form4.out.value = "среда";
                    break;
                case 12:
                    document.form4.out.value = "четверг";
                    break;
                case 13:
                    document.form4.out.value = "пятница";
                    break;
                case 14:
                    document.form4.out.value = "суббота";
                    break;
                case 15:
                    document.form4.out.value = "воскресенье";
                    break;
                case 16:
                    document.form4.out.value = "понедельник";
                    break;
                case 17:
                    document.form4.out.value = "вторник";
                    break;
                case 18:
                    document.form4.out.value = "среда";
                    break;
                case 19:
                    document.form4.out.value = "четверг";
                    break;
                case 20:
                    document.form4.out.value = "пятница";
                    break;
                case 21:
                    document.form4.out.value = "суббота";
                    break;
                case 22:
                    document.form4.out.value = "воскресенье";
                    break;
                case 23:
                    document.form4.out.value = "понедельник";
                    break;
                case 24:
                    document.form4.out.value = "вторник";
                    break;
                case 25:
                    document.form4.out.value = "среда";
                    break;
                case 26:
                    document.form4.out.value = "четверг";
                    break;
                case 27:
                    document.form4.out.value = "пятница";
                    break;
                case 28:
                    document.form4.out.value = "суббота";
                    break;
                case 29:
                    document.form4.out.value = "воскресенье";
                    break;
                case 30:
                    document.form4.out.value = "понедельник";
                    break;
                case 31:
                    document.form4.out.value = "вторник";
                    break;
                default:
                    alert("В январе 2006 года такой даты не существует");
            }
}