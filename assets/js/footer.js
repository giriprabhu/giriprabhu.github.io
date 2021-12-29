/* footer js developed on 12/10/2021. */
$(document).ready(function() {

    // footer
    $.getJSON("/assets/data/footer.json",
        function(data) {
            var footer = ''

            footer += '<div class="col-lg-4 col-md-12 col-sm-12">'
            footer += '<img class="img-fluid" src="'+data[0].url+'">'
            footer += '</div>'
            footer += '<div class="col-lg-3 col-md-12 col-sm-12 ">'
            footer += '<a class="btn btn-social mx-2" target="_blank" href="'+data[0].fbUrl+'">'
            footer += '<i class="fab fa-facebook-f"></i>'
            footer += '</a>'
            footer += '<a class="btn btn-social mx-2" target="_blank" href="'+data[0].instaUrl+'">'
            footer += '<i class="fab fa-instagram"></i>'
            footer += '</a>'
            footer += '<a class="btn btn-social mx-2" target="_blank" href="'+data[0].linkedInUrl+'">'
            footer += '<i class="fab fa-linkedin-in"></i>'
            footer += '</a>'
            footer += '<a class="btn btn-social mx-2" target="_blank" href="'+data[0].twitterUrl+'">'
            footer += '<i class="fab fa-twitter"></i>'
            footer += '</a>'
            footer += '</div>'
            footer += '<div class="col-lg-5 col-md-12 col-sm-12 text-right">'
            footer += '<span class="mr-2">'
            footer += '<a target="_blank" href="'+data[0].privacyPolicy+'">'
            footer += 'Privacy Policy'
            footer += '</a>'
            footer += '</span>'
            footer += '<span class="mr-2">'
            footer += '<a target="_blank" href="'+data[0].termsOfUse+'">'
            footer += 'Terms of Use'
            footer += '</a>'
            footer += '</span>'
            footer += '<span>'
            footer += '<a target="_blank" href="'+data[0].covid19+'">'
            footer += 'Covid-19 Information'
            footer += '</a>'
            footer += '</span>'
            footer += '<p>'
            footer += 'Copyright ©2018 -'+data[0].currentYear+''
            footer += '</p>'
            footer += '</div>'
            $('#footer-content').append(footer);
        });

});