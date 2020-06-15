//Inspired by https://rcshim04.github.io/contact.html

function mailto(){
    let message = "";
    for(let item of document.getElementsByClassName("input-field")){
        if(item.value != "SUBMIT") message += item.value + "%0A";
    }
    emailWindow = window.open("mailto:justinlu.photo@gmail.com?subject=Justin%20Lu's%20Website%20Form%20Response&body="+message);
}