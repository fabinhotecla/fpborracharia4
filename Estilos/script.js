$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrolly > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("stick");
        }    
        if(this.scrolly > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
        
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    //menu btn

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // animation 
    var typed = new Typed(".typing", {
        strings: [ "Venha","Conferir","Nossos","Preços"],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true
    }); 

    var typed = new Typed(".typing-2", {
        strings: [ "Mais de 20 Anos No Mercado  ","De Experiência","Preços Imbativeis","Venham Conferir!!!!!"],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true
    }); 


    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPuser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }

    });
    
});