/*
           _           _   _  __
          | |         | | (_)/ _|
  ___  ___| | ___  ___| |_ _| |_ _   _
 / __|/ _ \ |/ _ \/ __| __| |  _| | | |
 \__ \  __/ |  __/ (__| |_| | | | |_| |
 |___/\___|_|\___|\___|\__|_|_|  \__, |
                                  __/ |
                                 |___/

  Description: Moves current selection up and down.
  Version: 1.0.0
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/SelectifyJS
*/

import Helpers from '../../Helpers/Helpers';
import updateItem from './updateItem';

export default function moveCurrent($self, event) {
  const $select = $self.closest('.selectify').children('select');
  const $options = $self.find('.options');
  const position = $options.find('li[data-option]:visible').index($options.find('li[data-option]:visible.active'));
  let $element;

  if (Helpers.is($select, '[multiple]') === true) {
    return true;
  }

  if ($self.hasClass('active') === false) {
    return false;
  }

  if (event.keyCode === 38) {
    if (position > 0) {
      $element = $options.find(`li[data-option]:visible:eq(${Number(position - 1)})`);

      if ($element.length > 0) {
        updateItem($element);
      }
    }
  }

  if (event.keyCode === 40) {
    $element = $options.find(`li[data-option]:visible:eq(${Number(position + 1)})`);

    if ($element.length > 0) {
      updateItem($element);
    }
  }

  if ($element && $options.find('li[data-option]:visible').index($element) >= 0) {
    const scrollTop = $element.closest('.options').scrollTop();
    const elementTop = ($options.find('li:visible').index($element) + 1) * $element.outerHeight();

    if (scrollTop + 240 < elementTop || scrollTop >= elementTop) {
      $element.closest('.options').animate({
        scrollTop: elementTop <= 80 ? 0 : elementTop - (1 * $element.outerHeight()),
      }, 0);
    }
  }

  return true;
}
