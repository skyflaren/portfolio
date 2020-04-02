let slider = document.getElementById("slider");
let nav = document.getElementById("navbar");
let sw = 8;

slider.style.width = sw+"px";

nav.addEventListener("mouseenter",function (evt) {
	slider.style.display="block";
	slider.style.left = evt.clientX - (sw/2) + "px";
	slider.style.right = "auto";
});

nav.addEventListener("mouseleave",function () {
	slider.style.display="none";
});


var inintv=false, outintv=false;
for (let item of document.getElementsByClassName("item-navbar")) {
	item.addEventListener("mouseenter", function(evt){
		let mouseX = evt.clientX;
		let coord = item.getBoundingClientRect();
		slider.style.width = sw+"px";
                          
        clearInterval(inintv);
		inintv = setInterval(function(){
			mouseX = evt.clientX;
			slider.style.width = getSliderWd()*1.4 + "px";

			let slideLeft = Math.abs(Math.round(mouseX-coord.left)) <= Math.abs(Math.round(coord.right - mouseX));
			if(slideLeft){
				slider.style.left = Math.round(coord.left)+"px";
				slider.style.right = "auto";
			}
			else {
				slider.style.right = Math.round(window.innerWidth - coord.right)+"px";
                slider.style.left = "auto";
            }
                             
            if (mouseX+1 < coord.left || mouseX-1 > coord.right || !document.hasFocus) {
			    clearInterval(inintv);
			    inintv = false;
                slider.style.left = coord.left+"px";
				slider.style.right = "auto";
			}
			else if(getSliderWd() >= Math.round(coord.right-coord.left) || outintv){
				slider.style.left = coord.left+"px";
				slider.style.right = "auto";
                slider.style.width = Math.round(coord.right-coord.left) + "px";
                             
				clearInterval(inintv);
				inintv = false; 
			}
		},20);
	});

	item.addEventListener("mouseleave", function(evt){
        let mouseX = evt.clientX;
        let coord = item.getBoundingClientRect();
        slider.style.width = Math.round(coord.right-coord.left) + "px";
                          
        clearInterval(outintv);
        outintv = setInterval(function(){
            mouseX = evt.clientX; 
            slider.style.width = getSliderWd()/1.4 + "px";
                              
            let slideLeft = Math.abs(Math.round(mouseX-coord.left)) <= Math.abs(Math.round(coord.right - mouseX));
            if(slideLeft){
                slider.style.left = Math.round(coord.left)+"px";
                slider.style.right = "auto";
            }
            else {
                slider.style.right = Math.round(window.innerWidth - coord.right)+"px";
                slider.style.left = "auto";
            }

            if(Math.round(getSliderWd()) <= sw || !document.hasFocus || inintv){
                slider.style.width = sw+"px";
                              
                if(slideLeft){
                    slider.style.left = Math.round(coord.left)+"px";
                    slider.style.right = "auto";
                }
                else {
                    slider.style.right = Math.round(window.innerWidth - coord.right)+"px";
                    slider.style.left = "auto";
                }
                clearInterval(outintv);
                outintv = false;
            }
        },20);
	});
}

var btintv;
nav.addEventListener("mousemove", function(evt) {

	let inbtwn = true;
	let mouseX = evt.clientX;
    let min = 0;
                     
	for (let item of document.getElementsByClassName("item-navbar")) { 
		let coord = item.getBoundingClientRect();
                     
        min = (coord.left < min || min == 0 || Math.round(min) == 30 ? coord.left : min);
		inbtwn &= (mouseX+1 < coord.left || mouseX-1 > coord.right); 
	}
                     
    if (inbtwn && !outintv && !inintv) {
        inintv = false; outintv = false;
        clearInterval(inintv); 
        clearInterval(outintv);
		slider.style.right = 'auto';
        
       if(mouseX >= min){
            if(propFlt(slider.style.left) < mouseX-(sw/2)){
                slider.style.left = propFlt(slider.style.left)+1 + "px";
            }
            else if(propFlt(slider.style.left) > mouseX-(sw/2)){
                slider.style.left = propFlt(slider.style.left)-1 + "px";
            }
            else slider.style.left = mouseX-(sw/2) + "px";
        }
        else slider.style.left = mouseX-(sw/2) + "px";

        slider.style.width = sw+"px";
	}
});

function getSliderWd() {
	return propFlt(slider.style.width);
}

function getSliderL() {
	return propFlt(slider.style.left);
}

function propFlt(str) {
	return parseFloat(str.replace("px",''))
}
