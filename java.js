let textArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
let answer = document.getElementById("answer");
let word = document.getElementById("word");
let countP = document.getElementById("countP");
let randomNumber = textArray[Math.floor(Math.random()*textArray.length)];
let point = 0;
let score = document.getElementById("score");

word.innerHTML=randomNumber;



answer.addEventListener("keyup", ({key})=>{
    if(key=="Enter"){
        if(randomNumber == answer.value){
            point ++;
            console.log(point);
            randomNumber = textArray[Math.floor(Math.random()*textArray.length)];
            word.innerHTML=randomNumber;
            answer.value = "";
            countTime = 10;
            score.innerHTML= "Score: " + point;
        }else{
            answer.value = "";
        }
    }
})

let countTime = 10;
let countdown = setInterval(function(){
  if(countTime <= 0){
    clearInterval(countdown);
    document.getElementById("countP").innerHTML = "Time out!!!";
    
  } else {
    document.getElementById("countP").innerHTML = countTime + " seconds";
  }
  countTime -= 1;
}, 1000);


// function reset(){
//   document.getElementById("form").reset();
// }
