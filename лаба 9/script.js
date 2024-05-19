document.write("Hello, world<br>");
for(i=1;i<=10;i++)
{
	document.write("Hello, world "+i+"<br>");
}
function private()
{
	alert("Message");
	rezult=confirm("Button verification OK or Cancel");
	if(rezult===true){
		document.write("OK");
	}
	else{
		document.write("Cancel");
	}
}
function win3()
{
	alert("This image normal?")
}
helN();
function helN()
{
	var name=prompt("Имя");
	var nf=prompt("Фамилия");
	var otch=prompt("Отчество");
	var h=window.location.href;
	nf=nf.substring(0,1);
	otch=otch.substring(0,1);
	document.write("Добрый день, "+name.toUpperCase()+" "+nf.toUpperCase()+". "+otch.toUpperCase()+". <br> "+h+"<br>");
}