
/* Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* Welcome Message */
console.log("Welcome to Maryam's Portfolio! 🚀");

const navMenu = document.querySelector("#navMenu");
const indicator = navMenu?.querySelector(".nav-indicator");
const navLinks = navMenu?.querySelectorAll(".nav-link");

if (navMenu && indicator && navLinks.length) {

    function moveIndicator(link) {
        if (window.innerWidth <= 991) return;

        const menuRect = navMenu.getBoundingClientRect();
        const linkRect = link.getBoundingClientRect();

        indicator.style.left =
            `${linkRect.left - menuRect.left}px`;

        indicator.style.width =
            `${linkRect.width}px`;

        indicator.style.opacity = "1";
    }

    function setActive(link) {
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
        moveIndicator(link);
    }

    // Initial indicator
    const activeLink =
        navMenu.querySelector(".nav-link.active") || navLinks[0];

    moveIndicator(activeLink);

    // Hover animation
    navLinks.forEach(link => {

        link.addEventListener("mouseenter", () => {
            moveIndicator(link);
        });

        link.addEventListener("click", () => {
            setActive(link);
        });

    });

    // Return to active link
    navMenu.addEventListener("mouseleave", () => {
        const active =
            navMenu.querySelector(".nav-link.active");

        if (active) moveIndicator(active);
    });

    // Resize
    window.addEventListener("resize", () => {
        const active =
            navMenu.querySelector(".nav-link.active");

        if (active) moveIndicator(active);
    });

}
