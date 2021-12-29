/*
    rapidPrototyping json append to All HTML pages.
    Developed on 29/12/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/rapidPrototyping.json",
        function(data) {

            $('#rapid-prototyping-contents').append(data[0].desc);
        });

});