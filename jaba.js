$(document).ready(function(){
    let isX= false
    $('.c1').hide();

    $("#boton1").on("click", function(e){
        $('.c1').hide();
        $('#div3').show();
    })

    $("#boton2").on("click", function(e){
        $('.c1').hide();
        $('#div1').show();
    })

    $("#boton3").on("click", function(e){
        $('.c1').hide();
        $('#div4').show();
    })

    $("#boton4").on("click", function(e){
        $('.c1').hide();
        $('#div2').show();
    })
})