function sendMessage(e){
    e.preventDefault();
    alert("Thanks! Your message has been sent.");
    e.target.reset();
}
const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
