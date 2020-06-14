// // let slider = document.getElementById("slider");
// let topicsel = document.getElementById("topicsel");
// // let sw = 8;

// topicsel.addEventListener("mouseenter",function (evt) {
//      slider.style.display="block";
//      slider.style.left = evt.clientX - (sw/2) + "px";
//      slider.style.right = "auto";
//  });

// topicsel.addEventListener("mouseleave",function () {
//      slider.style.display="none";
//  });

let para = document.getElementById("topic-para");
let name = document.getElementById("topic-name");

for (let topic of document.getElementsByClassName("topic-item")){
    topic.addEventListener('click', function(){
        if(this.innerHTML == "OOP"){
            name.innerHTML = "Object Oriented Programming (OOP)";
            para.innerHTML = "LOOP";
        }
        else if(this.innerHTML == "Recursion"){
            name.innerHTML = "Recursion";
            para.innerHTML = "Incursion";
        }
        else if(this.innerHTML == "Searching &amp; Sorting"){
            name.innerHTML = "Searching &amp; Sorting";
            para.innerHTML = "Merchant &amp Boring";
        }
        else if(this.innerHTML == "Arrays &amp; Arraylists"){
            name.innerHTML = "Arrays &amp; Arraylists";
            para.innerHTML = "Allies &amp Armenia";
        }
    })

    // topic.addEventListener("mouseenter", function(){
    //     this.style.backgroundColor = "#cfcbcb";
    // })

    // topic.addEventListener("mouseleave", function(){
    //     this.style.backgroundColor = "inherit";
    // })
}