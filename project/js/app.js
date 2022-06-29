$(".show-sidebar-btn").click(function(){
    $(".sidebar").animate({marginLeft:0});
});

$(".hide-sidebar-btn").click(function(){
    $(".sidebar").animate({marginLeft:"-100%"});
})

function go(url){
    setTimeout(function(){
        location.href = `${url}`;
    },500)
}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

$(".full-screen-btn").click(function(){
    let current = $(this).closest(".card");
    current.toggleClass("full-screen-card");
    if(current.hasClass("full-screen-card")){
        $(this).html(`<i class="feather-minimize-2"></i>`);
    }else{
        $(this).html(`<i class="feather-maximize-2"></i>`)
    }
});