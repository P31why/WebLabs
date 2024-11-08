var max=20;
var min=-10;
var arr=[];

win=window.open("doc.html","wind",
"width=250,height=100,status=no,toolbar=no,menubar=no,scrollbars=yes");
for(var i=0;i<10;i++)
{
	arr[i]=Math.floor(Math.random() * (max - i + 1) + min);
	if(arr[i]>2){
			win.document.write('<span style=color:red; font-size:10mm>'+arr[i]+'</span>'+' ');
	}
	else win.document.write('<span style=color:yellow; font-size:1in>'+arr[i]+'</span>'+' ');
}

