var images=['header_ctt.png','icon(512).png','images.jpg','unnamed.png','1.png','Obito_Uchiha.png'];
var count=0;
var folder='pictures/';

var imLibr=new Array();
imLibr["image1"]=new Image(120,90);
imLibr["image1"].src="pictures/1.png";
imLibr["image2"]=new Image(120,90);
imLibr["image2"].src="pictures/header_ctt.png";
imLibr["image3"]=new Image(120,90);
imLibr["image3"].src="pictures/icon(512).png";
imLibr["image4"]=new Image(120,90);
imLibr["image4"].src="pictures/images.jpg";

function imgOver(event){
    var im=event.target.id;
    document.thum.src=imLibr[im].src;
}

function loadIm(list){
    var b=(list.load.options.selectedIndex)
    var img=list.load.options[b].value;
    document.thum.src=imLibr[img].src;
}

var timeStop=false;
var time = 5; // Задаём начальное время
const timer = setInterval(() => {
  document.getElementById('countdown').textContent = time;  // Останавливаем таймер, поскольку время истекло
  if(time <= 0 && timeStop===true){
    nextImage();
    time=5;
  }
  else{
    time--; 
  }
}, 1000); 

function TimeButton(){
    timeStop=!timeStop;
}

/*-----------------*/
function loadFirst(){
    const im=document.getElementById('image');
    im.src=folder+'header_ctt.png';
}
function nextImage(){
    count++;
    if(count>=images.length){
        count=0;
        const im=document.getElementById('image');
        im.src=folder+images[count];
    }
    else {
        const im=document.getElementById('image');
        im.src=folder+images[count];
    }
    
    
}
function previosImage(){
    count--;
    if(count<0){
        count=images.length-1;
        const im=document.getElementById('image');
        im.src=folder+images[count];
    }
    else {
        const im=document.getElementById('image');
        im.src=folder+images[count];
    }
}