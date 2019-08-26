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

function clickedRedButton(){
    document.getElementById("buttonInfo").innerHTML = "You clicked the red button";
}

function clickedBlueButton(){
    document.getElementById("buttonInfo").innerHTML = "You clicked the blue button";
}

function clickedYellowButton(){
    document.getElementById("buttonInfo").innerHTML = "You clicked the yellow button";
}
