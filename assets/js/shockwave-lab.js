/*
    shockwaveLab json append to All HTML pages.
    Developed on 29/12/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/shockwaveLab.json",
        function(data) {

            $('#shockwave-contents').append(data[0].desc);
        });

});