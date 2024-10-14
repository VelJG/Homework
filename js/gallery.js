
og=document.getElementById('image').innerHTML;

function upDate(previewPic){
 pic=document.getElementById('image'); 
 pic.style.backgroundImage=`url(${previewPic.src})`;
  pic.innerHTML = previewPic.alt;
	}

function unDo(){
   
pic=document.getElementById('image');
	pic.style.backgroundImage='';
    pic.innerHTML= og;
	}
