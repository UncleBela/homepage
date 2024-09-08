function updateTime() {
    const now = new Date();
    const dateString = now.toLocaleString(); // This formats the date and time nicely
    document.getElementById('date').innerText = dateString;
}

updateTime(); // Call immediately to update the time on page load
setInterval(updateTime, 1000); // Then update the time every second

//// Do things according to time.
// Change greeting text and background
const hour = new Date().getHours();

let hi;
if ((0 <= hour && hour < 6) || (18 <= hour && hour < 24)) {
    hi = 'good evening, anon.';
    bgImage = "url('./assets/bg/dark-moon.jpg')";

} else if (6 <= hour && hour < 12) {
    hi = 'good morning, anon.';
    bgImage = "url('./assets/bg/dark-starry-night.jpg')";

} else if (12 <= hour && hour < 18) {
    hi = 'good afternoon, anon.';
    bgImage = "url('./assets/bg/dark-mountains.jpg')";
}

    if (document.body.style.backgroundImage !== bgImage) {
        document.body.style.backgroundImage = bgImage;
}

document.getElementById('hi').innerHTML = hi;
