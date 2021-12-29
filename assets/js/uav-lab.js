/*
    uavLab json append to All HTML pages.
    Developed on 29/12/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/uavLab.json",
        function(data) {

            $('#uav-lab-contents').append(data[0].desc);
        });

});