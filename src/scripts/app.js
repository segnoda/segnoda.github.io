var $ = require('jquery');

var button = $('<button/>').html('click me!').on('click', function() {
    alert('hi');
});
$('body').append(button);
