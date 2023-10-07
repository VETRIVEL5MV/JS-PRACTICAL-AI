let count = 0;
        let btn = document.getElementById("btn");
        let disp = document.getElementById("likeCount");
         
        btn.onclick = function () {
                    count++;
        disp.innerHTML = count;
        }





















/*function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("counter").innerHTML = "You liked it " + localStorage.clickcount + " time(s).";
    } else {
      document.getElementById("counter").innerHTML = "Sorry";
    }
  }*/




























/*const likeButton = document.getElementById("lk");
const dislikeButton = document.getElementById("dk");
const likeCount = document.getElementById("likeCount");
const dislikeCount = document.getElementById("dislikeCount");

// Initialize counters
let likes = 0;
let dislikes = 0;

// Add click event listeners to the buttons
likeButton.addEventListener("click", () => {
    likes++;
    likeCount.textContent = likes;
});

dislikeButton.addEventListener("click", () => {
    dislikes++;
    dislikeCount.textContent = dislikes;
});*/