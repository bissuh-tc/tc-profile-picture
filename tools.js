function reshape() {
  var p1 = `${randIn(5, 25)}% ${randIn(5, 50)}%`;
  var p2 = `${randIn(28, 75)}% ${randIn(5, 15)}%`;
  var p3 = `${randIn(80, 95)}% ${randIn(5, 50)}%`;

  var p4 = `${randIn(80, 95)}% ${randIn(55, 95)}%`;
  var p5 = `${randIn(28, 75)}% ${randIn(75, 95)}%`;
  var p6 = `${randIn(5, 25)}% ${randIn(55, 95)}%`;

  $('#shape').css(
    'clip-path',
    `polygon(${p1}, ${p2}, ${p3}, ${p4}, ${p5}, ${p6})`
  );

  $('#backshape').css(
    'clip-path',
    `polygon(0 0, 50% 0%, 100% 0, ${p4}, ${p5}, ${p6})`
  );
}

function randIn(min, max) {
  do {
    var rand = Math.floor(Math.random() * 101);
  } while (rand < min || rand > max);

  return rand;
}

$('#file').click(function () {
  $('#file').attr('value', null);
});

function display_image() {
  $('#backshape').css('visibility', 'visible');
  $('#but_upload').attr('disabled', false);
  $('#loading').css('display', 'none');
  $('#profile-picture').css('display', 'block');
}
