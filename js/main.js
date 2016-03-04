var tally = {};
var position = 0;

$('.item').click(function() {
  var text = $(this).text();
  tally[text] = tally[text] ? tally[text] + 1 : 1;
  // console.log(tally);
  position += 1;
  change();
});

$('#results').click(function() {
  $('#results').toggle();
  $('#meal').toggle();
});

function change() {
  switch(position) {
    case 1:
      $('#meal').toggle();
      $('#side').toggle();
      break;
    case 2:
      $('#side').toggle();
      $('#drink').toggle();
      break;
    case 3:
      $('#drink').toggle();
      $('#results').toggle();
      complete();
      break;
  }
}

function complete() {
  position = 0;
  // console.log(tally);
  var foods = Object.keys(tally);
  var results = $('#results > #output');
  results.html('');
  foods.forEach(function(food) {
    results.append('<p><b>' + food + ':</b> <span>' + tally[food] + '</span></p>');
  });
}
