const buttonDay=document.getElementsByName('dayBut');

function DayOfWeek(){
    var day=document.getElementById("dayInput");
  
    switch(parseInt(day.value)){
        case 1:
            {
                alert("Понедельник");
                break;
            }
        case 2:
            {
                alert("Вторник");
                break;
            }
            
        case 3:
            {
                alert("Среда");
                break;
            }
        case 4:
            {
                alert("Четверг");
                break;
            }
            
        case 5:
            {
                alert("Пятница");
                break;
            }
            
        case 6:
           {
                alert("Суббота");
                break;
           }
        case 7:
            {
                alert("Воскресенье");
                break;
            }
        default:
            alert(":(");
        
    }
}
function FactorialCalc(){
    var num=parseInt(document.getElementById('numInput').value);
    var fac=1;
    for(var i=1; i<=num;i++){
        fac*=i;
    }
    alert(fac);
}