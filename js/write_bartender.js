menu = {};
$.getJSON("/js/menu_items.json", function(data) {
    menu = data;
}).done(function() {

    $.each(menu, function(index, value) {
        entry = '<optgroup label="'+index+'">';
          $.each(value, function(index, value) {
            entry = entry + '<option>' + index + '</option>';
          });
          entry = entry + '</optgroup>';

          $("#dropdownlist").append(entry);
    });

});

function writeTable(sel) {
  value = sel.value;
  label= $('#dropdownlist :selected').parent().attr('label');
  ingtable = $("#ingTable");
  ingtable.html('');
  
  ingtable.append('<h1>'+value+'</h1>' + 
                  '<table class="table table-striped" id="recipe" style="margin-top: 20px; background-color: white;">' +
                  '<thead><tr><th>Ingredient</th><th>Amount</th></tr></thead><tbody></tbody></table>'
);

  ingtable.css('visibility', 'visible');
  
  $.each(menu[label][value], function(index, thisthing) {
     $('#recipe > tbody').append('<tr><td>' + thisthing.Ingredient + '</td><td>' + thisthing.Amount + ' ' + thisthing.Unit + '</td>');
 });

  
  
}
