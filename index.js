//document.querySelectorAll("button").addEventListener("click", handleClick);

// we don't need the () for the function when we add the event listener
// if we use () the function will get called instantly, without any click
function handleClick(){
    alert("I got clicked!");
}

/* we can also do it like this:

document.querySelector("button").addEventListener("click", function(){
    alert("I got clicked!");
});
*/
function play(element){
    switch (element) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            break;
    }
};

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
    
    // detecting button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        play(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}

    //detecting keyboard press
document.addEventListener("keydown", function(event){
    //console.log(event); // event tells you which key was pressed and offers details
    play(event.key); // key is a property of event, which is why we use . to access it
    buttonAnimation(event.key);
});