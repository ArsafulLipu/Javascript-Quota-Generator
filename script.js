// GET /random
const quote = document.getElementById("quote");
const author = document.getElementById('author');
const api_url = "http://api.quotable.io/random";
async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;


}

function tweetShare(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Tweet Window", "width=600, height=300");
}
const fullscreenButton = document.getElementById('fullscreen-btn');
fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        // Enter fullscreen mode
        const element = document.documentElement; // The entire webpage
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        fullscreenButton.textContent = "Exit Fullscreen";
    } else {
        // Exit fullscreen mode
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        fullscreenButton.textContent = "Fullscreen";
    }
});

getQuote(api_url);