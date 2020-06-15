$(document).ready(function(){

    // alert('Loading');
    $(".linkClick").click(function(){

        var isChecked = $('#header__menu-btn').is(':checked');

        if(isChecked){
            $("#header__menu-btn").prop('checked',false);
        }
        else{
            $("#header__menu-btn").prop('checked',true);
        }
    })

});