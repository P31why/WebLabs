var images=['header_ctt.png','icon(512).png','images.jpg','unnamed.png','1.png','Obito_Uchiha.png'];
var count=0;
var folder='pictures/';
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