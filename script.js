// Scroll du haut vers le bas, fond du header devient noir

$(document).ready(function() {
    $(".hamburger").on("click", function(){
$("nav ul").toggleClass("menu"); 
    })
})

// Quand on clique sur hamburg, nav ul avec toggleclass > rajoute classe menu
// Menu fait la longueur du menu déroulant


$(window).on("scroll", function(){
if($(window).scrollTop()){
    $('nav').addClass('scroll'); // Classe a pour but de rendre noir le header
}
else {
$('nav').removeClass('scroll'); // On lui enlève la classe scroll
}
})
