// Scrolling down after a typing animation
let timeout = setTimeout(() => {
    document.getElementById("projects-section").scrollIntoView({
        behavior: 'smooth'
    });
}, 5000);


// Here we adjust a current year
const year = document.querySelector('#current-year')
year.innerHTML = new Date().getFullYear()