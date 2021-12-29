/*
    prototypeProduct json append to All HTML pages.
    Developed on 29/12/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/prototypeProduct.json",
        function(data) {

            $('#prototype-product-contents').append(data[0].desc);
        });

});