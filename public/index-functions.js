function clickedTheButton() {
    document.getElementById("myButton").innerHTML = "You clicked me";
}

let count = 0;

function getCount(){
    document.getElementById("count").innerHTML = count;
}

function increment(){
    count = count + 1;
    getCount();
}

function decrement(){
    count = count -1;
    getCount();
}