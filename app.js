// import $ from 'jquery';

window.$ = $;

$(document).ready(function() {
  var activeItem = $("#about-item");
  var activeWindow = $("#about-window");

  $('.item').each(function() {
    var self = $(this);

    self.click(function() {
      self.toggleClass('item-active');
      activeItem.toggleClass('item-active');
      activeItem = self;

      var name = "#" + self.attr('id').split('-')[0] + "-window";

      $(name).toggleClass('window-active');
      activeWindow.toggleClass('window-active');
      activeWindow = $(name);

    });
  });
});
