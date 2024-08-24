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

console.log(hour)

let hi;
if (hour <= 12) {
    hi = 'good morning, anon.';
    document.body.style.backgroundImage = "url('./assets/bg/dark-starry-night.jpg')"

} else if (hour < 18) {
    hi = 'good afternoon, anon.';
    document.body.style.backgroundImage = "url('./assets/bg/dark-mountains.jpg')"
} else if (hour > 18){
    console.log("Retard")
    hi = 'good evening, anon.';
    document.body.style.backgroundImage = "url('./assets/bg/dark-moon.jpg')"

}
document.getElementById('hi').innerHTML = hi;
