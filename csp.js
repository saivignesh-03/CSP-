window.addEventListener('DOMContentLoaded', (event) => {
    adjustBackgroundSize();
});

window.addEventListener('resize', () => {
    adjustBackgroundSize();
});

function adjustBackgroundSize() {
    const backgroundDiv = document.querySelector('.background-image');
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const aspectRatio = 1920 / 1080; // Aspect ratio of your background image (width / height)

    let backgroundWidth, backgroundHeight;

    if ((windowWidth / windowHeight) > aspectRatio) {
        backgroundWidth = windowWidth;
        backgroundHeight = windowWidth / aspectRatio;
    } else {
        backgroundWidth = windowHeight * aspectRatio;
        backgroundHeight = windowHeight;
    }

    backgroundDiv.style.width = `${backgroundWidth}px`;
    backgroundDiv.style.height = `${backgroundHeight}px`;
}


window.addEventListener('DOMContentLoaded', (event) => {
    const heading = document.getElementById('heading');
    const paragraph = document.getElementById('paragraph');

    // Add animation class to heading and paragraph
    heading.classList.add('slide-in-heading');
    paragraph.classList.add('slide-in-paragraph');
});
window.addEventListener('DOMContentLoaded', (event) => {
    const heading = document.getElementById('heading1');
    const paragraph = document.getElementById('paragraph1');

    // Add animation class to heading and paragraph
    heading.classList.add('slide-in-heading1');
    paragraph.classList.add('slide-in-paragraph1');
});