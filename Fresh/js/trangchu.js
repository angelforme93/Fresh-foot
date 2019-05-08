$(document).ready(function(){
    $('nav input').fadeOut(-3);
    $('nav #search').click(function(){
        
   
        $('nav input').fadeIn(00);
      
          });
   
//    owl carousel
$('.slide .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    dot: true,
    responsive:{
        0:{
            items:1
            
        }
       
    }
});
var x =$(window).width();

if(x < 768){


$('.slide2 .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // autoplay:true,
    // autoplayTimeout:3000,
    responsiveClass:true,
      smartSpeed: 1000,
      dots: true,
      
    responsive:{
      
        0:{
            items:1
        },
        
       
    }
    });
}
else if(x <1000){
    $('.slide2 .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        // autoplay:true,
        // autoplayTimeout:3000,
        responsiveClass:true,
          smartSpeed: 1000,
          dots: true,
          
        responsive:{
          
            0:{
                items:2
            },
            
           
        }
        });
}
else

$('.slide2 .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // autoplay:true,
    // autoplayTimeout:3000,
    responsiveClass:true,
      smartSpeed: 1000,
      dots: true,
      
    responsive:{
      
        0:{
            items:4
        },
        
       
    }
    });


})
