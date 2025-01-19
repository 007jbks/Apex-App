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
