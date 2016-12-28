function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


window.addEventListener('click', function (evt) {
    if (evt.detail === 3) {
        //alert('triple click!');
        var img = document.createElement('img');
        document.body.appendChild(img);
        document.body.insertBefore(img, document.body.firstChild);
        img.src = "https://github.com/rpelaez/caranchoa/raw/master/caranchoa1.png";
        img.width= "600";
        img.style.float= "right";
        img.style.position="absolute"
        img.style.setProperty("display", "flex", "important")
        img.style.setProperty("z-index", "100000")
        
        var audioElement = document.createElement('audio');
    	audioElement.setAttribute('src', 'https://github.com/rpelaez/caranchoa/raw/master/caranchoa.wav' );
    	audioElement.currentTime = 0;
        audioElement.play();
        
        sleep(400).then(() => {
        	img.src = "https://github.com/rpelaez/caranchoa/raw/master/caranchoa2.png";
    		img.width= "600";
    		document.onmousemove = updateAvatarPosition( evt, img)
    		img.style.float= "right";
    		img.style.position="absolute"
    		img.style.setProperty("display", "flex", "important")
    		img.style.setProperty("z-index", "100000")
    		
    	});
    	sleep(2000).then(() => {
    		img.remove();
    	});
    } 
});