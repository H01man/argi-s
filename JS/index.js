$(document).ready(function(){
    $("#toggle-menu").on("click",() =>{
        console.log("hola")
        $("#nav-menu").animate({right : 0}, 500)
    })

    $("#close-menu").on("click", () =>{
        $("#nav-menu").animate({right: -250}, 500)
    })
})
