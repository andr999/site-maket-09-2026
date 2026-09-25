//Year on the footer
let data = new Date();
let year = document.querySelector("span.year");
year.innerHTML = data.getFullYear();
//Button up
let upButton = document.querySelector('.up');

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }

});

upButton.addEventListener("click",function () {
  window.scrollTo(0, 0);
});