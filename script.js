// Custom Cursor
const cursor = document.querySelector('.cursor');
const trailingCursor = document.querySelector('.cursor--trailing');

// Follow the mouse position with cursor and trailing cursor
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    trailingCursor.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
});

// Theme toggle logic
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
}

// Fix scroll behavior when clicking on "View My Work"
document.querySelector("button").addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({ behavior: 'smooth', block: 'start' });
});
