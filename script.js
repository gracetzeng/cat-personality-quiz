/*Add your JavaScript here*/

//variables
var gingerCount = 0; //0
var coonCount = 0;   //1
var blackCount = 0;    //2
var siaCount = 0;  //3
var scoreArray = [gingerCount, coonCount, blackCount, siaCount];

var questionCount = 0;
var result = document.getElementById("result");
var seeResult = document.getElementById("seeResult");
var restart = document.getElementById("restart");


//questions
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");


//event listeners
q1a1.addEventListener("click", coonSia);
q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", gingerBlack);
q1a2.addEventListener("click", disableQ1);

q2a1.addEventListener("click", coonBlack);
q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", gingerSia);
q2a2.addEventListener("click", disableQ2);

q3a1.addEventListener("click", gingerBlack);
q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", coonSia);
q3a2.addEventListener("click", disableQ3);

q4a1.addEventListener("click", coonBlack);
q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", gingerSia);
q4a2.addEventListener("click", disableQ4);

q5a1.addEventListener("click", gingerCoon);
q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", blackSia);
q5a2.addEventListener("click", disableQ5);

q6a1.addEventListener("click", blackSia);
q6a1.addEventListener("click", disableQ6);
q6a2.addEventListener("click", gingerCoon);
q6a2.addEventListener("click", disableQ6);

seeResult.addEventListener("click", printResult);
restart.addEventListener("click", retakeQuiz);


//disable button function
function disableQ1() {
  q1a1.disabled = true; 
  q1a2.disabled = true; 
}

function disableQ2() {
  q2a1.disabled = true; 
  q2a2.disabled = true; 
}

function disableQ3() {
  q3a1.disabled = true; 
  q3a2.disabled = true; 
}

function disableQ4() {
  q4a1.disabled = true; 
  q4a2.disabled = true; 
}

function disableQ5() {
  q5a1.disabled = true; 
  q5a2.disabled = true; 
}

function disableQ6() {
  q6a1.disabled = true; 
  q6a2.disabled = true; 
}


//functions
function gingerCoon() {
  
  gingerCount++;
  coonCount++;

  scoreArray[0]++;
  scoreArray[1]++;
  questionCount++;

  console.log("questionCount = " + questionCount +
    ", gingerCount = " + gingerCount +
    ", coonCount = " + coonCount +
    ", blackCount = " + blackCount +
    ", siaCount = " + siaCount)

  if (questionCount == 6) {
    console.log("the quiz is completed!");
    checkArray();
  }
}


function gingerBlack() {
  gingerCount++;
  blackCount++;

  scoreArray[0]++;
  scoreArray[2]++;
  questionCount++;

  console.log("questionCount = " + questionCount +
    ", gingerCount = " + gingerCount +
    ", coonCount = " + coonCount +
    ", blackCount = " + blackCount +
    ", siaCount = " + siaCount)

  if (questionCount == 6) {
    console.log("the quiz is completed!");
    checkArray();
  }
}


function gingerSia() {
  gingerCount++;
  siaCount++;

  scoreArray[0]++;
  scoreArray[3]++;
  questionCount++;

  console.log("questionCount = " + questionCount +
    ", gingerCount = " + gingerCount +
    ", coonCount = " + coonCount +
    ", blackCount = " + blackCount +
    ", siaCount = " + siaCount)

  if (questionCount == 6) {
    console.log("the quiz is completed!");
    checkArray();
  }
}


function coonBlack() {
  coonCount++;
  blackCount++;

  scoreArray[1]++;
  scoreArray[2]++;
  questionCount++;

  console.log("questionCount = " + questionCount +
    ", gingerCount = " + gingerCount +
    ", coonCount = " + coonCount +
    ", blackCount = " + blackCount +
    ", siaCount = " + siaCount)

  if (questionCount == 6) {
    console.log("the quiz is completed!");
    checkArray();
  }
}


function coonSia() {
  coonCount++;
  siaCount++;

  scoreArray[1]++;
  scoreArray[3]++;
  questionCount++;

  console.log("questionCount = " + questionCount +
    ", gingerCount = " + gingerCount +
    ", coonCount = " + coonCount +
    ", blackCount = " + blackCount +
    ", siaCount = " + siaCount)

  if (questionCount == 6) {
    console.log("the quiz is completed!");
    checkArray();
  }
}


function blackSia() {
  blackCount++;
  siaCount++;

  scoreArray[2]++;
  scoreArray[3]++;
  questionCount++;

  console.log("questionCount = " + questionCount +
    ", gingerCount = " + gingerCount +
    ", coonCount = " + coonCount +
    ", blackCount = " + blackCount +
    ", siaCount = " + siaCount)

  if (questionCount == 6) {
    console.log("the quiz is completed!");
    checkArray();
  }
}


//results

//help i don't want to do this for every combination ;-;
//i also don't want to make an array
//update: i made an array


function checkArray() {
  for (x = 0; x < scoreArray.length; x++)
    console.log(scoreArray[x]);

  findResult();
}

/*
  single answer: 4
  double answer: 6
  triple answer: 4
  quad answer: 1
*/

var gingerAnswer = false;
var coonAnswer = false;
var blackAnswer = false;
var siaAnswer = false;

var numAnswers = 0;
function findResult() {
  var largestNum = scoreArray[0];
  for (x = 0; x < scoreArray.length; x++) {
    //finding max value
    if (scoreArray[x] > largestNum) {
      largestNum = scoreArray[x];
      numAnswers = 1;

      gingerAnswer = false; 
      coonAnswer = false;
      blackAnswer = false;
      siaAnswer = false;

      if (x==0)
        gingerAnswer = true;
      else if (x==1)
        coonAnswer = true;
      else if (x==2)
        blackAnswer = true;
      else
          siaAnswer = true;

    }
    else if (scoreArray[x] == largestNum) {
      numAnswers++;
      
      if (x==0)
        gingerAnswer = true;
      else if (x==1)
        coonAnswer = true;
      else if (x==2)
        blackAnswer = true;
      else
          siaAnswer = true;
    }
  }
}


function printResult() {

  if (numAnswers == 1)
  {
    if (gingerAnswer==true)
      result.innerHTML = "you are a ginger cat!";
    else if (coonAnswer==true)
      result.innerHTML = "you are a maine coon cat!";
    else if (blackAnswer==true)
      result.innerHTML = "you are a black cat!";
    else
      result.innerHTML = "you are a siamese cat!";
  }
  else if (numAnswers == 2)
  {
    if (gingerAnswer==true && coonAnswer==true)
      result.innerHTML = "you are a norwegian forest cat!";
    if (gingerAnswer==true && blackAnswer==true)
      result.innerHTML = "you are a bengal cat!";
    if (gingerAnswer==true && siaAnswer==true)
      result.innerHTML = "you are a sphynx  cat!";
    if (coonAnswer==true && blackAnswer==true)
      result.innerHTML = "you are a domestic shorthair cat!";
    if (coonAnswer==true && siaAnswer==true)
      result.innerHTML = "you are a ragdoll  cat!";
    if (blackAnswer==true && siaAnswer==true)
      result.innerHTML = "you are a persian cat!"; 
  }
  else //numAnswers = 3 or 4
  {
    result.innerHTML = "you are a kitty!";
  }

  console.log(result);
}



function retakeQuiz ()
{
  result.innerHTML = "you are a...";
  
  gingerCount = 0;
  coonCount = 0;
  blackCount = 0;
  siaCount = 0;
  questionCount = 0;
  numAnswers = 0;

  gingerAnswer = false;
  coonAnswer = false;
  blackAnswer = false;
  siaAnswer = false;

  for (x=0; x<scoreArray.length; x++)
  {
      scoreArray[x] = 0;
  }
  
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q5a1").disabled = false;
  document.getElementById("q5a2").disabled = false;
  document.getElementById("q6a1").disabled = false;
  document.getElementById("q6a2").disabled = false;
}