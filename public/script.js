//functions to get minutes to year in increasing order
let time = {
  minutes: "",
  hour: "",
  amPm: "", 
  date: "",
  month: "",
  year: ""
}

function getTime(){
  const date = new Date();
  
  //minutes
  time.minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  
  //hour
  time.hour = date.getHours() <= 12 ? date.getHours() : date.getHours() - 12;
  
  //is it am or pm
  let h = date.getHours()
  h < 12 ? time.amPm = "am" : time.amPm = "pm";
  
  //date
  if (time.date < 10) 
    time.date = `0${date.getDate()}`;
  else 
    time.date =  date.getDate();
  
  //month
  let month = date.getMonth() + 1;

  switch(month) {
  case 1: month = "January"
    break;
  case 2: month = "February"
    break;
  case 3: month = "March"
    break;
  case 4: month = "April"
    break;
  case 5: month = "May"
    break;
  case 6: month = "June"
    break;
  case 7: month = "July"
    break;
  case 8: month = "August"
    break;
  case 9: month = "September"
    break;
  case 10: month = "October"
    break;
  case 11: month = "November"
    break;
  case 12: month = "December"
    break;
  default: alert("how did this happen?")
}
  time.month = month;
  
  //year
  time.year = date.getYear() + 1900;
  
  //time
  console.log(time)
}

//define the message objects
let messages1 = {
  number: null,
  text: null,
  date: null,
  time: null,
}

let messages2 = {
  number: null,
  text: null,
  date: null,
  time: null,
}

let messages3 = {
  number: null,
  text: null,
  date: null,
  time: null,
}

let messages4 = {
  number: null,
  text: null,
  date: null,
  time: null,
}

let messages5 = {
  number: null,
  text: null,
  date: null,
  time: null,
}

//Displaying confessions
let confessionNumber = 0;

//update the confessions
function updateConfessions() {
  Object.assign(messages1, messages2);
  Object.assign(messages2, messages3);
  Object.assign(messages3, messages4);
  Object.assign(messages4, messages5);  
}

function outputConfessions() {
  if (messages1.number != null) document.getElementById("first").innerHTML = `Anonymous confession #${messages1.number} <br><br> ${messages1.text} <br><br> ${messages1.date}, at ${messages1.time}`;
  if (messages2.number != null) document.getElementById("second").innerHTML = `Anonymous confession #${messages2.number} <br><br> ${messages2.text} <br><br> ${messages2.date}, at ${messages2.time}`;
  if (messages3.number != null) document.getElementById("third").innerHTML = `Anonymous confession #${messages3.number} <br><br> ${messages3.text} <br><br> ${messages3.date}, at ${messages3.time}`;
  if (messages4.number != null) document.getElementById("fourth").innerHTML = `Anonymous confession #${messages4.number} <br><br> ${messages4.text} <br><br> ${messages4.date}, at ${messages4.time}`;
  if (messages5.number != null) document.getElementById("fifth").innerHTML = `Anonymous confession #${messages5.number} <br><br> ${messages5.text} <br><br> ${messages5.date}, at ${messages5.time}`;
}

//Bot responses
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

let arr = [];
arr[0] = "What an interesting confession to make...";
arr[1] = "Are you sure you should be saying that?";
arr[2] = "Wowww...";
arr[3] = "Imagine I accidentally leaked who you are ;)";
arr[4] = "wha-";
arr[5] = "I- I- I-";

function botReply() {
  //number for reply and number for delay
  let replyNumber = Math.floor(Math.random() * 6);
  let timeTaken = (Math.floor(Math.random() * 5) + 1) * 1000;
  document.getElementById('responseText').innerHTML = "thinking..."
  sleep(timeTaken).then(() => document.getElementById('responseText').innerHTML = arr[replyNumber]);
}

function newConfession() {
  if(event)
      event.preventDefault();
    
    updateConfessions();
    
    confessionNumber++;
    messages5.number = confessionNumber;
    messages5.text = document.getElementById('confession').value;
  
    messages5.date = `${time.month} ${time.date} ${time.year}`;
    messages5.time = `${time.hour}:${time.minutes} ${time.amPm}`;
    
    outputConfessions();
    
    botReply();
    
    document.getElementById('confession').value = '';
  }
  
function checkReport() {
  if (document.getElementById('fifth').textContent.includes("!report")) {
    window.location.replace("contactAuthorities.html");
  }
  console.log(document.getElementById('fifth').textContent);
}

//Tutorial 
if(localStorage.getItem("boxesDone") == null)
  localStorage.setItem("boxesDone", "0");

document.addEventListener("DOMContentLoaded", function() {

  const currPage = window.location.pathname;
  console.log(localStorage.getItem("boxesDone"));

  if (localStorage.getItem("boxesDone") != "6") {
    if (currPage === "/mainPage.html") {
      if (document.referrer.includes("index.html")) {
        boxesDone = 2;
        tutorial();
      }
    }
  }

  if(currPage === "/index.html") {
    localStorage.setItem("boxesDone", "0");
  }
});

function tutorial() {
  let saveNumber = confessionNumber;
  boxesDone = Number(localStorage.getItem("boxesDone"));
  switch (boxesDone) {
    case 0:
      document.getElementById('start').setAttribute("class", "hide")
      document.getElementById('firstBox').removeAttribute("class");
      localStorage.setItem("boxesDone", "1");
      break;
    case 1:
      document.getElementById('firstBox').setAttribute("class", "hide");
      document.getElementById('secondBox').removeAttribute("class");
      localStorage.setItem("boxesDone", "2");
      break;
    case 2:
      document.getElementById('secondBox').setAttribute("class", "hide");
      sleep(3000).then(() => {
        document.getElementById('thirdBox').removeAttribute("class");
      });
      localStorage.setItem("boxesDone", "3");
      break;
    case 3:
      document.getElementById('fourthBox').removeAttribute("class");
      localStorage.setItem("boxesDone", "4");
      break;
    case 4:
      document.getElementById('fourthBox').setAttribute("class", "hide"); 
      document.getElementById('fifthBox').removeAttribute("class");
      localStorage.setItem("boxesDone", "5");
      break;
    case 5:
      document.getElementById('fifthBox').setAttribute("class", "hide"); 
      document.getElementById('sixthBox').removeAttribute("class");
      
      waitForSubmit(saveNumber).then(() => {
          sleep(1500).then(() => {
            document.getElementById('sixthBox').setAttribute("class", "hide");
            document.getElementById('seventhBox').removeAttribute("class");
          });

          sleep(5000).then(() => {
            document.getElementById('seventhBox').setAttribute("class", "hide");
          })
      });
      localStorage.setItem("boxesDone", "6");
      break;
    default: console.log("How in the world did that happen?");
  }
}

function waitForSubmit(saveNumber) {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      console.log(`${confessionNumber}`)
      if (confessionNumber != saveNumber) {
        clearInterval(interval);
        resolve();
      }
    }, 100)
  })
}

function randomizeItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateConfession() {
  if(event)
    event.preventDefault();

  const subject = ["english", "eng", "stat", "statistics", "fil", "filipino", "chem", "chemistry", "math", "bio", "biology", "physics", "phys", "socsci", "ss"]
  const tense = ["was", "will be", "is bouta be"];
  const difficulty = ["basic", "easy", "the end of me"];
  const label = ["quiz", "lt", "mqe", "exam", "eqe"];
  
  updateConfessions();
  
  confessionNumber++;
  messages5.number = confessionNumber;
  messages5.text = `${randomizeItem(subject)} ${randomizeItem(label)} ${randomizeItem(tense)} ${randomizeItem(difficulty)}`;

  messages5.date = `${time.month} ${time.date} ${time.year}`;
  messages5.time = `${time.hour}:${time.minutes} ${time.amPm}`;
  
  outputConfessions();
  
  botReply();
  
  document.getElementById('confession').value = '';
}

function showModal() {
  let modals = document.getElementsByClassName('modalCheckPswd');
  for (i = 0; i < modals.length; i++) {
    modals[i].classList.add("show");
  }

  let body = document.body;
  body.classList.add("blur");
}

function hideModal() {
  let modals = document.getElementsByClassName('modalCheckPswd');
  for (i = 0; i < modals.length; i++) {
    modals[i].classList.remove("show");
  }
  
  let body = document.body;
  body.classList.remove("blur");
}

function checkPassword() {
  const date = new Date();
  let check = document.getElementsByClassName('password');
  console.log(`${time.date}/0${date.getMonth() + 1}/${time.year}`)
  for(i = 0; i < check.length; i++) {
    if (check[i].value == `${time.date}/0${date.getMonth() + 1}/${time.year}`) {
      window.location.replace("adminArchives.html")
    } else {
      hideModal();
      alert("Wrong Password");
    }
  }
}

function sendHint() {
  if (confessionNumber % 13 == 12) {
    updateConfessions();
  
    confessionNumber++;
    messages5.number = confessionNumber;
    messages5.text = `Woah 13! Unlucky number:((`;

    messages5.date = `${time.month} ${time.date} ${time.year}`;
    messages5.time = `${time.hour}:${time.minutes} ${time.amPm}`;
  
    outputConfessions();
  
    botReply();
  
    document.getElementById('confession').value = '';
  }
}

function sendReport() {
  if (document.getElementById('number').innerHTML == "6227020800");
  console.log("number correct")
}

let randomizeNumber = 0;
let nextCast = Math.floor(Math.random() * (180 - 15 + 1)) + 15;
function onload() {
  randomizeNumber++; 

  getTime();

  checkReport();

  sendHint();

  if (randomizeNumber >= nextCast) {
    generateConfession();
    console.log(`${nextCast}, ${randomizeNumber}, ${randomizeNumber - nextCast}`);
    nextCast = Math.floor(Math.random() * (180 - 15 + 1)) + 15;
    randomizeNumber = 0;
  }
}
 
//js for pagination archive
page1 = {
  1: "Archived 1 <br><br>⠀     projects killing me rn",
  2: "Archived 2 <br><br>⠀     stop reminding me",
  3: "Archived 3 <br><br>⠀     wait what projects?",
  4: "Archived 4 <br><br>⠀     RAHH IM STRONGER THAN THE PROJECTS",
  5: "Archived 5 <br><br>⠀     do you put date as DD/MM/YYYY or MM/DD/YYYY? DD/MM/YYYY is so much better"
}

page2 = {
  6: "Archived 6 <br><br>⠀     I'm so tired",
  7: "Archived 7 <br><br>⠀     sameee",
  8: "Archived 8 <br><br>⠀     tired is an understatement",
  9: "Archived 9 <br><br>⠀     HELPPPPPP",
  10: "Archived 10 <br><br>⠀    everyone's tired? why?"
}

page3 = {
  11: "Archived 11 <br><br>⠀     today was terrible",
  12: "Archived 12 <br><br>⠀     I can't take it anymore",
  13: "Archived 13 <br><br>⠀     my grades after this qtr are so bad",
  14: "Archived 14 <br><br>⠀     ehhh it's gonna be okay guys chill",
  15: "Archived 15 <br><br>⠀     rn? chill? how?"
}

function changePage(currPage) {

  if(currPage == 1) {
      //previous
      document.getElementById("pastConf").setAttribute("class", "hideStay");

      //current
      document.getElementById("curr1").innerHTML = page1[1];
      document.getElementById("curr2").innerHTML = page1[2];
      document.getElementById("curr3").innerHTML = page1[3];
      document.getElementById("curr4").innerHTML = page1[4];
      document.getElementById("curr5").innerHTML = page1[5];
      
      //next
      document.getElementById("nextConf").classList.remove("hideStay");
      document.getElementById("next1").innerHTML = page2[6];  
      document.getElementById("next2").innerHTML = page2[7];  
      document.getElementById("next3").innerHTML = page2[8];
      document.getElementById("next4").innerHTML = page2[9];
      document.getElementById("next5").innerHTML = page2[10];
      currPageNum = 1;
  } else if (currPage == 2) {
    //previous
    document.getElementById("pastConf").classList.remove("hideStay");
    document.getElementById("past1").innerHTML = page1[1];
    document.getElementById("past2").innerHTML = page1[2];
    document.getElementById("past3").innerHTML = page1[3];
    document.getElementById("past4").innerHTML = page1[4];
    document.getElementById("past5").innerHTML = page1[5];

    //current
    document.getElementById("curr1").innerHTML = page2[6];  
    document.getElementById("curr2").innerHTML = page2[7];  
    document.getElementById("curr3").innerHTML = page2[8];
    document.getElementById("curr4").innerHTML = page2[9];
    document.getElementById("curr5").innerHTML = page2[10];

    //next
    document.getElementById("nextConf").classList.remove("hideStay");
    document.getElementById("next1").innerHTML = page3[11];
    document.getElementById("next2").innerHTML = page3[12];
    document.getElementById("next3").innerHTML = page3[13];
    document.getElementById("next4").innerHTML = page3[14];
    document.getElementById("next5").innerHTML = page3[15];
    currPageNum = 2;
  } else if (currPage == 3) {
    //previous
    document.getElementById("pastConf").classList.remove("hideStay");
    document.getElementById("past1").innerHTML = page2[6];  
    document.getElementById("past2").innerHTML = page2[7];  
    document.getElementById("past3").innerHTML = page2[8];
    document.getElementById("past4").innerHTML = page2[9];
    document.getElementById("past5").innerHTML = page2[10];

    //current
    document.getElementById("curr1").innerHTML = page3[11];
    document.getElementById("curr2").innerHTML = page3[12];
    document.getElementById("curr3").innerHTML = page3[13];
    document.getElementById("curr4").innerHTML = page3[14];
    document.getElementById("curr5").innerHTML = page3[15];

    //next
    document.getElementById("nextConf").setAttribute("class", "hideStay");
    currPageNum = 3;
  }

}

let currPageNum = 2;
function next() {
  if (currPageNum < 3) {
    changePage(currPageNum + 1);
  }
  console.log(currPageNum)  
} 

function back() {
  if (currPageNum > 1) {
    changePage(currPageNum - 1);
  }
  console.log(currPageNum)
}

if (window.location.pathname === "/archive.html") {
  //previous
  document.getElementById("past1").innerHTML = page1[1];
  document.getElementById("past2").innerHTML = page1[2];
  document.getElementById("past3").innerHTML = page1[3];
  document.getElementById("past4").innerHTML = page1[4];
  document.getElementById("past5").innerHTML = page1[5];

  //current
  document.getElementById("curr1").innerHTML = page2[6];  
  document.getElementById("curr2").innerHTML = page2[7];  
  document.getElementById("curr3").innerHTML = page2[8];
  document.getElementById("curr4").innerHTML = page2[9];
  document.getElementById("curr5").innerHTML = page2[10];

  //next
  document.getElementById("next1").innerHTML = page3[11];
  document.getElementById("next2").innerHTML = page3[12];
  document.getElementById("next3").innerHTML = page3[13];
  document.getElementById("next4").innerHTML = page3[14];
  document.getElementById("next5").innerHTML = page3[15];
} 