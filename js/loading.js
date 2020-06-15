$(document).ready(function(){

    setTimeout(function(){
        $('.loader-wrapper').addClass('d-none');
        $('.loader').addClass('notransition');
        $('.loader-inside').addClass('notransition');
    },3000);
});