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