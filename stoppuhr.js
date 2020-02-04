seconds = 0;
minutes = 0;
hours = 0;


window.onload = function(){
    document.getElementById("start").addEventListener('click', startTimer);
    document.getElementById("stop").addEventListener('click',stopTimer);
}

function stopTimer(){
    clearInterval(myTimer);
}

function startTimer(){
    myTimer = setInterval(updateTime,1000);

}

function updateTime(){
    if(seconds==59){
        seconds = 0;
        if(minutes==59){
            minutes=0;
            if(hours==23){
                hours=0;
            }else{
                hours++;
            }
        }else{
            minutes++;

        }

    }else{
        seconds++;
    }
    calcSeconds();
    calcMinutes();
    calcHours();
}



function calcSeconds(){
    let rightSeconds = seconds%10;
    let leftSeconds= Math.floor(seconds/10)

    let topSecondsRight = document.getElementById("seconds").firstElementChild.nextElementSibling.firstElementChild;
    let bottomSecondsRight = topSecondsRight.nextElementSibling;
    let topSecondsLeft= document.getElementById("seconds").firstElementChild.firstElementChild;
    let bottomSecondsLeft = topSecondsLeft.nextElementSibling;

    showTime(rightSeconds,topSecondsRight,bottomSecondsRight);
    showTime(leftSeconds,topSecondsLeft, bottomSecondsLeft);
}

function calcMinutes(){
    let rightMinutes = minutes%10;
    let leftMinutes= Math.floor(minutes/10)

    let topMinutesRight = document.getElementById("minutes").firstElementChild.nextElementSibling.firstElementChild;
    let bottomMinutesRight = topMinutesRight.nextElementSibling;
    let topMinutesLeft= document.getElementById("minutes").firstElementChild.firstElementChild;
    let bottomMinutesLeft = topMinutesLeft.nextElementSibling;

    showTime(rightMinutes,topMinutesRight,bottomMinutesRight);
    showTime(leftMinutes,topMinutesLeft,bottomMinutesLeft);

}

function calcHours(){
    let rightHours = hours%10;
    let leftHours= Math.floor(hours/10)

    let topHoursRight = document.getElementById("hours").firstElementChild.nextElementSibling.firstElementChild;
    let bottomMinutesRight = topHoursRight.nextElementSibling;
    let topHoursLeft= document.getElementById("hours").firstElementChild.firstElementChild;
    let bottomMinutesLeft = topHoursLeft.nextElementSibling;

    showTime(rightHours,topHoursRight,bottomMinutesRight);
    showTime(leftHours,topHoursLeft,bottomMinutesLeft);
}








function showTime(number, topElement, bottomElement){
    let top = topElement;
    let bottom = bottomElement;
    switch(number){
        case 1:
            top.className= "one_t";
            bottom.className="one_b";
            break;
        case 2:
            top.className= "two_t";
            bottom.className="two_b";
            break;
        case 3:
            top.className= "three_t";
            bottom.className="three_b";
            break;
        case 4:
            top.className= "four_t";
            bottom.className="four_b";
            break;
        case 5:
            top.className= "five_t";
            bottom.className="five_b";
            break;
        case 6:
            top.className= "six_t";
            bottom.className="six_b";
            break;
        case 7:
            top.className= "seven_t";
            bottom.className="seven_b";
            break;
        case 8:
            top.className= "eight_t";
            bottom.className="eight_b";
            break;
        case 9:
            top.className= "nine_t";
            bottom.className="nine_b";
            break;
        case 0:
            top.className= "zero_t";
            bottom.className="zero_b";
            break;
    }

    if(seconds%2!=0){
        let separators = document.querySelectorAll(".point");
        separators.forEach(element =>
            element.className="pointOn"
        );
    }else{
        let separators = document.querySelectorAll(".pointOn");
        separators.forEach(element =>
            element.className="point"
        );
    }
}