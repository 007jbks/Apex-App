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


const url = "https://api.api-ninjas.com/v1/quotes";
const apikey = "2MXZgu7YS0Ep5/T6xMu4vw==sKMM58lZKkEfB9i6";


fetch(url, {
  method: 'GET',
  headers: {
    'X-Api-Key': apikey
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then(data => {
    if (Array.isArray(data) && data.length > 0) {
      // Access the first quote and author from the response
      const quote = data[0].quote;
      const author = data[0].author;

      // Display the quote and author on the webpage
      document.getElementById('quote').textContent = `"${quote}"`;
      document.getElementById('author').textContent = `- ${author}`;
    } else {
      // Handle case when the response array is empty
      document.getElementById('quote').textContent = 'No quotes found!';
      document.getElementById('author').textContent = '';
    }
  })
  .catch(error => {
    // Log any errors and display a fallback message
    console.error('Error fetching the quote:', error);
    document.getElementById('quote').textContent = 'Failed to fetch a quote. Please try again later.';
    document.getElementById('author').textContent = '';
  });
