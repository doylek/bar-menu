menu = {};
$.getJSON("js/menu_items.json", function(data) {
    menu = data;
}).done(function() {
    var menuBody = $('#menuBody');

    $.each(menu, function(index, value) {

        menuBody.append('<div class="row"> ' +
            '<div class="col-md-8">' +
            '<h2 class="category tiki" id="' + index + '">' + index + '</h2> ' +
            '</div>' +
            '</div>');

        $.each(value, function(index, value) {

            var inglist = '';
            $.each(value, function(index, value) {
                inglist = index === 0 ? inglist + value.Ingredient : inglist + ', ' + value.Ingredient;
            });
            menuBody.append(' <div class="drinkrow row">' +
                '<div class="col-md-8">' +
                '<h4 class="drinkname">' + index + '</h4>' +
                '<p class="card-text desc"> ' + inglist + '  </p>' +
                '</div>' +
                '</div>');
        });
    });
});
