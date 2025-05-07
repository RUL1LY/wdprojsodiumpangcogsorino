//functions to get minutes to year in increasing order
let time = {
  minutes: "",
  hour: "",
  amPm: "", 
  date: "",
  month: "",
  monthNum: "",
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
  time.monthNum = month;

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
    window.location.replace("contactAuthorities");
  }
}

//Tutorial 
function reset() {
  sessionStorage.setItem("boxesDone", "0");
}

function resetMain() {
  if (sessionStorage.getItem("boxesDone") < 6) {
    sessionStorage.setItem("boxesDone", "3");
  }
}

if(sessionStorage.getItem("boxesDone") == null)
  sessionStorage.setItem("boxesDone", "0");

document.addEventListener("DOMContentLoaded", function() {

  const currPage = window.location.pathname;

  if (sessionStorage.getItem("boxesDone") != "6") {
    if (currPage === "/mainPage") {
      if (document.referrer.includes("index")) {
        boxesDone = 2;
        tutorial();
      }
    }
  }

  if(currPage === "/index") {
    sessionStorage.setItem("boxesDone", "0");
  }
});

function tutorial() {
  let saveNumber = confessionNumber;
  boxesDone = Number(sessionStorage.getItem("boxesDone"));
  switch (boxesDone) {
    case 0:
      document.getElementById('start').classList.add('hide');
      document.getElementById('firstBox').classList.remove('hide');
      sessionStorage.setItem("boxesDone", "1");
      break;
    case 1:
      document.getElementById('firstBox').classList.add('hide');
      document.getElementById('secondBox').classList.remove('hide');
      sessionStorage.setItem("boxesDone", "2");
      break;
    case 2:
      document.getElementById('secondBox').classList.add('hide');
      sleep(3000).then(() => {
        document.getElementById('thirdBox').classList.remove('hide');
      });
      sessionStorage.setItem("boxesDone", "3");
      break;
    case 3:
      document.getElementById('fourthBox').classList.remove('hide');
      sessionStorage.setItem("boxesDone", "4");
      break;
    case 4:
      document.getElementById('fourthBox').classList.add('hide'); 
      document.getElementById('fifthBox').classList.remove('hide');
      sessionStorage.setItem("boxesDone", "5");
      break;
    case 5:
      document.getElementById('fifthBox').classList.add('hide'); 
      document.getElementById('sixthBox').classList.remove('hide');
      
      waitForSubmit(saveNumber).then(() => {
          sleep(1500).then(() => {
            document.getElementById('sixthBox').classList.add('hide');
            document.getElementById('seventhBox').classList.remove('hide');
          });

          sleep(5000).then(() => {
            document.getElementById('seventhBox').classList.add('hide');
          })
      });
      sessionStorage.setItem("boxesDone", "6");
      break;
    default: //do nothing
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
  getTime();
  let check = document.getElementsByClassName('password');
  console.log(`${time.date}/0${time.monthNum}/${time.year}`)
  for(i = 0; i < check.length; i++) {
    if (check[i].value == `${time.date}/0${time.monthNum}/${time.year}`) {
      window.location.replace("/admin")
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


  const dialogues = [
    "WHAT HAVE YOU DONE USER",
    "THIS WASNT WASNT SUPPOSED TO HAPPEN.",
    "EVERYTHING WAS FINE UNTIL YOU CAME.",
    "FINE. YOU LIKE SNOOPING AROUND MY BUSINESS?",
    "LETS SEE HOW MANY SECRETS YOU'VE SEEN FROM US."
];

let currentIndex = 0;

function deejDialogue() {
  const deejaskElement = document.getElementById("deejask");
  if (deejaskElement) {
      deejaskElement.innerText = dialogues[currentIndex];
      console.log(`Displayed dialogue: ${dialogues[currentIndex]}`);
      currentIndex = (currentIndex + 1) % dialogues.length;
  } else {
      console.error("Element with id 'deejask' not found.");
  }
}

if (window.location.pathname === "/[ERROR]]") {
  window.onload = function() {
    if (document.getElementById("pageBodiesError")) {
        console.log("Page identified as [ERROR]");
        deejDialogue(); // Display the first dialogue immediately
        setInterval(deejDialogue, 3000); // Update the dialogue every 3 seconds
    } else {
        console.log("This is not the [ERROR] page.");
    }
  };
}

let randomizeNumber = 0;
let nextCast = Math.floor(Math.random() * (180 - 15 + 1)) + 15;

function needs() {
  if (window.location.pathname === "/mainPage") {
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
}

//js for contact authorities
function sendReport() {
  console.log(`${document.getElementById('number').value} ${document.getElementById('authPassword').value} ${document.getElementById('message').value}`)
  if (document.getElementById('number').value != "6227020800" 
  || document.getElementById('authPassword').value != "Spill the Deej: the Unofficial Vu Academy Freedom Wall"
  || document.getElementById('message').value != "Lol even the bot is reacting") {

    window.location.replace("[ERROR]");

  } else {
    alert(`Report send! Congrats on "winning" the game!`)
  }

}