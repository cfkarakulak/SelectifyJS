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
  Version: 1.0.0
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/SelectifyJS
*/

export default function toggleButton($self) {
  const $element = $self.parent('.selectify');
  const $all = $element.find('li[data-option]');
  const $active = $all.filter('.active');

  $('.selectify.active').not($element).removeClass('active');

  $element.find('.filter > input').val('').trigger('input').end()
    .toggleClass('active')
    .find('.options')
    .animate({
      scrollTop: ($all.index($active) + 1) * $active.outerHeight() - (1 * $active.outerHeight()),
    }, 0);

  return false;
}
