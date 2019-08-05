/*
           _           _   _  __
          | |         | | (_)/ _|
  ___  ___| | ___  ___| |_ _| |_ _   _
 / __|/ _ \ |/ _ \/ __| __| |  _| | | |
 \__ \  __/ |  __/ (__| |_| | | | |_| |
 |___/\___|_|\___|\___|\__|_|_|  \__, |
                                  __/ |
                                 |___/

  Description: Filters items based on search term.
  Version: 1.0.0
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/SelectifyJS
*/

/* eslint no-bitwise: ["error", { "allow": ["~"] }] */

export default function filterItem($self) {
  const $wrapper = $self.closest('.selectify');
  const $all = $wrapper.find('li[data-option]');
  const $active = $all.filter('.active');
  const value = $.trim($self.val()).replace(/\s+/g, '').toLowerCase();

  if (value) {
    $wrapper.addClass('filtering').find('ul > li[data-option]').show().filter(function () {
      return !~$(this).text().replace(/\s+/g, '').toLowerCase()
        .indexOf(value);
    })
      .hide();
  }

  if (!value) {
    $wrapper.removeClass('filtering').find('ul > li[data-option]').show().closest('.options')
      .animate({
        scrollTop: ($all.index($active) + 1) * $active.outerHeight() - (1 * $active.outerHeight()),
      }, 0);
  }

  return false;
}
