//  There is extensive use of addEventListner in this module
//   _______.addEventListner("    ",function);

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
}
function handleclick(){
    var buttoninnerhtml =this.innerHTML;
    buttonAnimation(buttoninnerhtml);
   switch (buttoninnerhtml) {
    case "w":
        var audio=new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
    case "a":
        var audio=new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
    case "s":
        var audio=new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
    case "d":
        var audio=new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
    case "j":
        var audio=new Audio('sounds/snare.mp3');
        audio.play();
        break;
    case "k":
        var audio=new Audio('sounds/crash.mp3');
        audio.play();
        break;
    case "l":
        var audio=new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;    
    default:
        break;
   } 
}
document.addEventListener("keydown",function(event){
    var keypressed= event.key;
    buttonAnimation(keypressed);
    switch (keypressed) {
        case "w":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;    
        default:
            break;
       } 
})

function buttonAnimation( currentkey ){
    var button= document.querySelector("."+ currentkey );
    button.classList.add("pressed");

    //          This function is used to set the timeout time or the time after which another function is performrd after
    //          performing the previous function
    setTimeout(function(){
        button.classList.remove("pressed");
    },100);
}

