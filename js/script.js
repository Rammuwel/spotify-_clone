


function stickyNavbar() {
    const container = document.getElementById('scrollContainer');
    const navbar = document.getElementById('navbar');
  

    if (container.scrollTop > 50) {
        console.log("Adding sticky class"); // Debugging line
        navbar.classList.add("sticky");
    } else {
        console.log("Removing sticky class"); // Debugging line
        navbar.classList.remove("sticky");
    }
}



const gridItems = document.querySelectorAll('.featured-cart');


gridItems.forEach(item => {
    item.addEventListener('click', function() {
        const url = "playlist.html";
        window.location.href = url; 
    });
});




const toggle = document.getElementById('toggle');

toggle.addEventListener('click', function() {
  document.querySelector('.left-container').classList.add('toggleMenu');
  document.querySelector('.right-inner-container').classList.add('no-scroll');
});

const close = document.getElementById('closebtn');

close.addEventListener('click', function() {
  document.querySelector('.left-container').classList.remove('toggleMenu');
  document.querySelector('.right-inner-container').classList.remove('no-scroll');
});














