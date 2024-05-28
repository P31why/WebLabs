function t1(){
	var table=document.getElementById("tableV");
	table.innerHTML="<tr><th> x </th><th>y</th></tr>";
	var a=parseFloat(document.form1.inputA.value);
	var b=parseFloat(document.form1.inputB.value);
	var h=parseFloat(document.form1.inputH.value);
	for(var x=a;x<=b;x+=h){
		var y = Math.sin(x)-Math.cos(x);
        table.innerHTML += "<tr><td>" + x + "</td><td>" + y + "</td></tr>";
	}
}
function t3(){
	var table=document.getElementById("tableV2");
	table.innerHTML="<tr><th> x </th></tr>";
	var a=parseFloat(document.form2.inputA.value);
	var b=parseFloat(document.form2.inputB.value);
	for(var x=a;x<=b;x++){
		if(x%2!==0){
			table.innerHTML += "<tr><td>" + x + "</td></tr>";		
		}		
	}
}