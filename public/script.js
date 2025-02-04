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

//input new confession and output

function newConfession() {
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

let randomizeNumber = 0;
let nextCast = Math.floor(Math.random() * (180 - 15 + 1)) + 15;

function onload() {
  randomizeNumber++; 
  getTime();
  if (randomizeNumber >= nextCast) {
    generateConfession();
    console.log(`${nextCast}, ${randomizeNumber}, ${randomizeNumber - nextCast}`);
    nextCast = Math.floor(Math.random() * (180 - 15 + 1)) + 15;
    randomizeNumber = 0;
  }
}

function generateConfession() {
  const subject = ["english", "eng", "stat", "statistics", "fil", "filipino", "chem", "chemistry", "math", "mathematics", "bio", "biology", "physics", "phys", "socsci", "ss"]
  const time = ["was", "will be", "is bouta be"]
}
                          
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
  let check = document.getElementsByClassName('password');

  for(i = 0; i < check.length; i++) {
    if (check[i].value == "test") {
      window.location.replace("adminArchives.html")
    } else {
      hideModal();
      alert("Wrong Password");
    }
  }
}