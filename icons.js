for (let topic of document.getElementsByClassName("topic-item")){
    topic.addEventListener('click', function(){
        if(this. == "OOP"){
            this.style.fontWeight = "700";
            base();
            oop();
        }
        // else if(this.innerHTML == "Recursion"){
        //     this.style.fontWeight = "700";
        //     base();
        //     rec();
        // }
        else if(this.innerHTML == "Searching &amp; Sorting"){
            this.style.fontWeight = "700";
            base();
            searchSort();
        }
        else if(this.innerHTML == "Arrays &amp; Arraylists"){
            this.style.fontWeight = "700";
            base();
            arrLists();
        }
    })
}