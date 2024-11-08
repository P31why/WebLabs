function ForForm1()
{
	var a=parseInt(document.form1.a.value);
	var b=parseInt(document.form1.b.value);
	var c=parseInt(document.form1.c.value);
	var sum=a+b+c;
	var res=sum/3;
	document.form1.res.value=res;
}
function ForForm2()
{
	var a=parseInt(document.form2.a.value);
	var b=parseInt(document.form2.b.value);
	document.form2.p.value=(a+b)*2;
	document.form2.s.value=a*b;
	document.form2.d.value=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
}
function ForForm3()
{
	var a=parseInt(document.form3.a.value);
	document.form3.b.value=parseInt(a/100);
	document.form3.c.value=parseInt(a/10%10);
	document.form3.r.value=a%10;
}
function ForForm4()
{
	var x1=document.form4.a.value;
	var y1=document.form4.b.value;
	var x2=document.form4.c.value;
	var y2=document.form4.d.value;
	var resw1=Math.sqrt(Math.pow(x1,2)+Math.pow(y1,2));
	var resw2=Math.sqrt(Math.pow(x2,2)+Math.pow(y2,2));
	document.form4.res1.value=parseInt(resw1);
	document.form4.res2.value=parseInt(resw2);
}