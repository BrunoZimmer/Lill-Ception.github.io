var url = window.location.href;
let element;
if(url.includes('presentations')){
    element = document.getElementById("presentations");
}else if(url.includes('evenements')){
    element = document.getElementById("evenements");
}else if(url.includes('contact')){
    element = document.getElementById("contact");
}else {
    element = document.getElementById("home");
}

element.style.color = 'white';
