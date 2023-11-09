/* Toastr options */
var toastrOptions = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-left",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};
function show_loading_effect(count) {
    var template = '<div class="question-loading" style="width: 60%;display: block;margin: auto">';
    for(var i = 0;i<count;i++){
        template += '<p class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>';
    }
    template += '</div>';

    return template;
}
function show_loading_book() {
    return '<div class="loading-book"><div class="book"> <div class="inner"> <div class="left"></div> <div class="middle"></div> <div class="right"></div> </div> <ul> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> </ul> </div> </div>';
}
/* Loading btn */
function loading(element) {
    var oldText = element.html();
    element.attr("disabled","disabled");
    element.attr("data-old-text", oldText);
    element.html('<i class="fas fa-spinner fa-spin" aria-hidden="true"></i>');
}
/* Remove loading btn */
function remove_loading(element) {
    var text = element.attr("data-old-text");
     element.html(text);
     element.removeAttr("disabled");
}
function  clearToast() {
    $("#toast-container").remove();
}
function show_panel_loading() {
    var template = '<div class="panel-loading">';
    template += '<div class="lds-ripple"><div>';
    template += '</div>';
    return template;
}

$(document).ready(function () {
    /*var _height = $(".melo-header .navbar").outerHeight();
    var _height_top = $(".top-fixed-mobile-navbar").outerHeight();
   $(".melo-header").css("padding-top",(_height+_height_top)+"px")
   $(".mdk-header-layout__content").css("padding-top",(_height+_height_top)+"px")*/
});