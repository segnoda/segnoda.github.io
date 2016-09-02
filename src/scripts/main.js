var $ = require('jquery');
 
var button = $('<button/>').html('click me!').on('click', function() {
    alert('Hello, world!');
});
$('body').append(button);
