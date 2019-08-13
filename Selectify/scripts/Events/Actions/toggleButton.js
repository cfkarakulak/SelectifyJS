'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toggleButton;
/*
           _           _   _  __
          | |         | | (_)/ _|
  ___  ___| | ___  ___| |_ _| |_ _   _
 / __|/ _ \ |/ _ \/ __| __| |  _| | | |
 \__ \  __/ |  __/ (__| |_| | | | |_| |
 |___/\___|_|\___|\___|\__|_|_|  \__, |
                                  __/ |
                                 |___/

  Description: Toggles selectify's miserable option list :(
  Version: 1.0.1
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/SelectifyJS
*/

function toggleButton($self) {
  var $element = $self.parent('.selectify');
  var $all = $element.find('li[data-option]');
  var $active = $all.filter('.active');

  $('.selectify.active').not($element).removeClass('active');

  $element.find('.filter > input').val('').trigger('input').end().toggleClass('active').find('.options').animate({
    scrollTop: ($all.index($active) + 1) * $active.outerHeight() - 1 * $active.outerHeight()
  }, 0);

  return false;
}