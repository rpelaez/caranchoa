function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function updateAvatarPosition( e , avatar)
{
    avatar.style.left = e.x;
	avatar.style.top = e.y;
}


window.addEventListener('click', function (evt) {
    if (evt.detail === 3) {
        //alert('triple click!');
        var img = document.createElement('img');
        document.onmousemove = updateAvatarPosition( evt, img)
        document.body.appendChild(img);
        img.src = "caranchoa1.png";
        img.width= "150";
        img.style.float= "left";
        img.style.position="relative"
        img.style.top="100"
        
        var audioElement = document.createElement('audio');
    	audioElement.setAttribute('src', 'caranchoa.wav' );
    	audioElement.currentTime = 0;
        audioElement.play();
        
        sleep(100).then(() => {
        	img.remove();
        	img = document.createElement('img');
        	document.onmousemove = updateAvatarPosition( evt, img)
       		document.body.appendChild(img);
    		img.src = "caranchoa2.png";
    		img.width= "150";
    		img.style.float= "left";
    		img.style.position="relative"
    		img.style.top="10"
    		
    	});
    	sleep(1000).then(() => {
    		img.remove();
    	});
    } 
});