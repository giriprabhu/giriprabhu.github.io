/*
    Service json Developed on 12/10/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/services.json",
        function(data) {
            var services = ''

            $.each(data, function(key, value) {

                services += '<div class="col-lg-3 col-md-6 text-center">'
                services += '<div class="card" style="width: 16rem;">'
                services += '<img class="card-img-top" src="'+value.imageUrl+'" alt="Card image cap">'
                services += '<div class="card-body">'
                services += '<h5 class="card-title">'+value.title+'</h5>'
                services += '<p class="card-text">'+value.intro+'</p>'
                services += '<a href="'+value.url+'" class="btn btn-primary">Know More</a>'
                services += '</div>'
                services += '</div>'
                services += '</div>'
            });

            $('#service-list').append(services);
        });

});