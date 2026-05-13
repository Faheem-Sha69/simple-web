console.log("Welcome to my simple website!");

// Example: change background color on click
document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.getElementById("home");
    homeSection.addEventListener("click", () => {
        homeSection.style.backgroundColor = "#e0ffe0";
    });

    // Contact form submission
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page reload
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simple confirmation message
        formMessage.textContent = `Thank you, ${name}! Your message has been received.`;

        // Clear form
        contactForm.reset();
    });
});