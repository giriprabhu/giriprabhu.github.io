/*
    engineeringDesignWorks json append to All HTML pages.
    Developed on 29/12/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/engineeringDesignWorks.json",
        function(data) {

            $('#engineering-design-works-contents').append(data[0].desc);
        });

});