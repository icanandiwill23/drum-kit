// function iWasClick(){
//     var audio = new Audio('./sounds/tom-1.mp3');
//     audio.play();
// }

// Constructor Function
function HouseKeeper(name, age, skills, experience){
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.experience = experience;
    this.clean = function(){
        alert(this.name + " cleaning in progress....");
    }
}

let houseKeeper2 = new HouseKeeper("Rica", 25, ["Dancing", "Singing"], "1 year");

let houseKeeper3 = new HouseKeeper("Diana", 23, ["Laundry", "Electrical"], "1.5 years");

let houseKeeper1 = {
    empName: "Jane",
    age: 28,
    skills: ["Room Service", "Laundry "],
    experience: "2 years" 
};

// Constructor Function
function BellBoy (name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

var numberOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // this.style.color = "white";
        let buttonDrum = this.innerHTML;

        switchCaseCall(buttonDrum);
        animateButton(buttonDrum);        

    }); 

}

document.addEventListener("keydown", function(e){
    let key = e.key;
    switchCaseCall(key);
    animateButton(key);
});

function animateButton(event){
    let selectedBtn = document.querySelector("." + event);
    selectedBtn.classList.add("pressed");

    setTimeout(function(){
        selectedBtn.classList.remove("pressed");
    }, 100);
}

function switchCaseCall(buttonDrum){

    switch (buttonDrum) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
            
        default:
            console.log(this);
            break;
    }
}




// Solution 1
// let drumsCount = document.querySelectorAll(".drum");
//     for(let i = 0; i<drumsCount.length; i++){
//         document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//             let btns = document.querySelectorAll(".drum")[i]
//             let audio;
//             if(btns.textContent == "w"){
//                 audio = new Audio("./sounds/tom-1.mp3");
//                 audio.play();
//             }
//             else if (btns.textContent == "a"){
//                 audio = new Audio("./sounds/tom-2.mp3");
//                 audio.play();
//             }
//             else if (btns.textContent == "s"){
//                 audio = new Audio("./sounds/tom-3.mp3");
//                 audio.play();
//             }
//             else if (btns.textContent == "d"){
//                 audio = new Audio("./sounds/tom-4.mp3");
//                 audio.play();
//             }
//             else if (btns.textContent == "j"){
//                 audio = new Audio("./sounds/crash.mp3");
//                 audio.play();
//             }
//             else if (btns.textContent == "k"){
//                 audio = new Audio("./sounds/kick-bass.mp3");
//                 audio.play();
//             }
//             else{
//                 audio = new Audio("./sounds/snare.mp3");
//                 audio.play();
//             }
//         });
// }


// Calculator Function in JavaScript
// function add(num1, num2){
//     return num1 + num2;
// }

// function multiply(num1, num2){
//     return num1 * num2;
// }

// function subtract(num1, num2){
//     return num1 - num2;
// }

// function division(num1, num2){
//     return num1 / num2;
// }

// function calculator (num1, num2, operator){
//     return operator(num1, num2);
// }