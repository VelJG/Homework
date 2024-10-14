
let og;

function upDate(previewPic){
	og=document.getElementById('image').innerHTML;
 pic=document.getElementById('image'); 
 pic.style.backgroundImage=`url(${previewPic.src})`;
  pic.innerHTML = previewPic.alt;
	}

function unDo(){
   
pic=document.getElementById('image');
	pic.style.backgroundImage='';
    pic.innerHTML= og;
	}
