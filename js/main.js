var properNames = {
  Chubby: 'Chubby Chicken', //'Chubby &#x1F414;&#x1F354;',
  Teen: 'Teen Burger', //'Teen &#x1F354;',
  Papa: 'Papa Burger', //'Papa &#x1F354;',
  Strips: 'Chicken Strips', //'&#x1F414; Strips',
  // Fries: '&#x1F35F;',
  // Nestea: 'Nes&#x2615;',
  'Sweet Fries': 'Sweet Potato Fries', //'Sweet Potato &#x1F35F;',
  // 'Onion Rings': 'Onion &#x1F48D;s',
  // 'Root Beer': 'Root &#x1F37A;'
}

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
  colorize();
  $('#meal').toggle();
});

$('#ok').click(function() {
  $('#results').unbind();
  $('#ok').toggle();
  $('#results').prop('contentEditable', true);
  $('#results').css(randomBg());
  $('#results').click(function() {
    $(this).css(randomBg());
  });
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
      runningTotal();
      break;
  }
}

function runningTotal() {
  position = 0;
  // console.log(tally);
  var foods = Object.keys(tally);
  var ul = $('#results > ul');
  ul.html('');
  foods.forEach(function(food) {
    ul.append('<li><span>' + (tally[food] < 10 ? '&nbsp;' : '') + tally[food] + '</span> &#8212; <b>' + (properNames[food] ? properNames[food] : food) + '</b></li>');
  });
}

function randomBg() {
  var hue = Math.floor(Math.random()*360+1);
  var bgColor = 'hsla(' + hue + ', 50%, 50%, 1)';
  var color = 'hsla(' + hue + ', 50%, 30%, 1)';
  return { backgroundColor: bgColor, color:  color};
}

function colorize() {
  $('.item').each(function() {
    $(this).css(randomBg());
  });
  $('#ok').css(randomBg());
}

$(document).ready(function() {
  colorize();
});



