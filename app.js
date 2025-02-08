const home = document.getElementsByClassName('home')[0];
const timer = document.getElementsByClassName('timer')[0];
const tasklist = document.getElementsByClassName('tasklist')[0];
const flashcard = document.getElementsByClassName('flashcard')[0];
const doubtsolving = document.getElementsByClassName('doubtsolving')[0];

// Get the .main-* elements
const mainHome = document.getElementsByClassName('main-home')[0];
const mainTimer = document.getElementsByClassName('main-timer')[0];
const mainTasklist = document.getElementsByClassName('main-tasklist')[0];
const mainFlashcard = document.getElementsByClassName('main-flashcard')[0];
const mainDoubt = document.getElementsByClassName('main-doubt')[0];



// Function to reset all z-indexes
function resetZIndexes() {
  mainHome.style.zIndex = 5;
  mainTimer.style.zIndex = 4;
  mainTasklist.style.zIndex = 3;
  mainFlashcard.style.zIndex = 2;
  mainDoubt.style.zIndex = 1;
}

// Add event listeners to make them clickable and update z-index
home.addEventListener('click', function() {
  resetZIndexes();
  mainHome.style.zIndex = 10; // Bring home to the front
  home.classList.add("active");
  timer.classList.remove("active");
  tasklist.classList.remove("active");
  flashcard.classList.remove("active");
  doubtsolving.classList.remove("active");

  //bringing the clicked screen to light
 
  timer.classList.remove("active");
  tasklist.classList.remove("active");
  flashcard.classList.remove("active");
  doubtsolving.classList.remove("active");
});

timer.addEventListener('click', function() {
  resetZIndexes();
  mainTimer.style.zIndex = 10; // Bring timer to the front
 timer.classList.add("active");
  home.classList.remove("active");
  tasklist.classList.remove("active");
  flashcard.classList.remove("active");
  doubtsolving.classList.remove("active");
});

tasklist.addEventListener('click', function() {
  resetZIndexes();
  mainTasklist.style.zIndex = 10; // Bring tasklist to the front
 tasklist.classList.add("active");
  home.classList.remove("active");
  timer.classList.remove("active");
  flashcard.classList.remove("active");
  doubtsolving.classList.remove("active");
});

flashcard.addEventListener('click', function() {
  resetZIndexes();
  mainFlashcard.style.zIndex = 10; // Bring flashcard to the front
 flashcard.classList.add("active");
  home.classList.remove("active");
  tasklist.classList.remove("active");
  timer.classList.remove("active");
  doubtsolving.classList.remove("active");
});

doubtsolving.addEventListener('click', function() {
  resetZIndexes();
  mainDoubt.style.zIndex = 10;
  doubtsolving.classList.add("active");
  home.classList.remove("active");
  tasklist.classList.remove("active");
  flashcard.classList.remove("active");
  timer.classList.remove("active"); // Bring doubts to the front
 
});
const username = "Kartik"
document.getElementById('username').textContent = " "+username;

const now = new Date();
const date = now.getDate();
const year = now.getYear();
const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(now);
document.getElementById('date').textContent = date+" "+monthName;

const studyHourstoday = 0;
document.getElementById('today-hours').textContent = studyHourstoday+" Hrs";
const avgstudyHours = 0;
document.getElementById('avg-hours').textContent = avgstudyHours+" Hrs";

const progressHours = 0;
document.getElementById('progress-hours').textContent = progressHours+" %"


//document.getElementById('time').textContent = "";

let sec = 0;
const countdown = null;
function startTimer(){
  if (countdown==null){
const countdown = setInterval(()=>{
sec++;
console.log(sec);
},1000);
}}

