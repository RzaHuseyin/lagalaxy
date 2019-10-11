
$(".js_open_nav").click(function(){
    $(".main_navbar").addClass("active_nav")
        .removeClass("deactive_nav")
    
});
$(".js_language").click(function(){
    $(this).toggleClass("active_lang").toggleClass("fa-caret-up")
}); 

$(".js_close_nav").click(function(){
    $(".main_navbar").addClass("deactive_nav")
        .removeClass("active_nav")
});

// all modal function *******************************

// modal login and supported       >>> main bage
activeModal(".js_log_modal",".js_sup_modal","loginModal","supportModal")

// modal login  and product        >>> product bage
activeModal(".js_log_modal","#product .box_shadow","loginModal","product_modal")

// modal organization_modal  and station_modal    >>>admin  bage
activeModal("#stations_admin b","#organizations_admin b","station_modal","organization_modal")


function activeModal(clickButton1, clickbutton2,modalClass1,modalClass2){
    $(clickButton1).click(function () {
        $("#commonModal").removeClass(modalClass2).addClass(modalClass1)
    })
    $(clickbutton2).click(function () {
        $("#commonModal").removeClass(modalClass1).addClass(modalClass2)
    })
}

// end all modal function *******************************

$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    margin: 10,
    item: 1,
    dots: true,
    margin: 10,
    mouseDrag: false,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    autoplay: true,
    autoplayTimeout: 100,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
            mouseDrag: true
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
            mouseDrag: true
        },
        1000: {
            items: 1
        }
    }
})
// $('.owl-carousel').on('mousewheel', '.owl-stage', function (e) {
//     if (e.deltaY > 0) {
//         $('.owl-carousel').trigger('next.owl');
//     } else {
//         $('.owl-carousel').trigger('prev.owl');
//     }
//     e.preventDefault();
// });



// js button 
$(".js_button").click(function(){
    $(this).parent().children("button").removeClass("active_button");
    $(this).addClass("active_button") ;

    $(".js_admin_pages, .js_user_pages").css("display","none");
    $( "#"+ $(this).data("target")).fadeIn();
})
$(".js_button_report").click(function(){
    $(this).parent().children("button").removeClass("active_button_report");
    $(this).addClass("active_button_report") ;

    $(".js_user_report").css("display","none");
    $( "#"+ $(this).data("target")).css("display","flex");
})

// user page  js

$(".dropdown_user_nav").click(function(){
    $(".dropdown_menu_user").toggle()

})

$(".js_edit_user").click(function (){
        $("#commonModal").removeClass("new_question_modal").removeClass("change_password_modal").addClass("edit_profile_user_modal")
})
$(".js_change_password_user").click(function (){
    $("#commonModal").removeClass("new_question_modal").removeClass("edit_profile_user_modal").addClass("change_password_modal")
})
$(".js_new_question_user").click(function (){
    $("#commonModal").removeClass("edit_profile_user_modal").removeClass("change_password_modal").addClass("new_question_modal")
})



//product open page js
$(".js_product_open").click(function(){
    $(".js_product_open").removeClass("bg_colorProduct");
    $(this).addClass("bg_colorProduct") ;
    $(".js_main_pro_open img").attr("src",  $(this).children("img").attr("src"))
    
})