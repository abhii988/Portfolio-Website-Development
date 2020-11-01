var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000);
}
function getValue() {
    var name = prompt("Please enter your name : ", "Name");           
    if (name.length == 0) {
        alert("Please enter a valid name!");
        getValue();
    }
    else {
        document.getElementById("demo").innerHTML =  "Hello " + name + "!";
    }
}
$(function () {
    count = 0;
    wordsArray = ["Web Site", "CV", "Blog", "Portfolio"];
    setInterval(function () {
        count++;
        $("#word").fadeOut(400, function () {
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
        });
    }, 3000);
});
