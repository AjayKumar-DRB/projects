let onSwitch = document.getElementById('on');
let offSwitch = document.getElementById('off');

let onLabel = document.querySelector("label[for='on']");
let offLabel = document.querySelector("label[for='off']");

let container = document.getElementById('switchBody');

let onCilcked = () => {
    container.style.boxShadow = "inset -0.9em 0 0.9em #494949"
    offLabel.style.color = "#8e8e8e";
    onLabel.style.color = "#98f135";
}

onSwitch.addEventListener("click", onCilcked);

let offCilcked = () => {
    container.style.boxShadow = "inset 0.9em 0 0.9em #171717"
    offLabel.style.color = "#f1959f ";
    onLabel.style.color = "#8e8e8e";
}

offSwitch.addEventListener("click", offCilcked);