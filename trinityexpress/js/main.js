const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
        hamburger.classList.toggle("toggle");
    });
});

//Get the button
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 120px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // Go to top button
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }