/*
           _           _   _  __
          | |         | | (_)/ _|
  ___  ___| | ___  ___| |_ _| |_ _   _
 / __|/ _ \ |/ _ \/ __| __| |  _| | | |
 \__ \  __/ |  __/ (__| |_| | | | |_| |
 |___/\___|_|\___|\___|\__|_|_|  \__, |
                                  __/ |
                                 |___/

  Description: Update item, thats all.
  Version: 1.0.0
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/SelectifyJS
*/

import Helpers from '../../Helpers/Helpers';

export default function updateItem($element) {
  const $select = $element.closest('.selectify').children('select');

  if (Helpers.is($element, '[disabled]') === true) {
    return false;
  }

  if (Helpers.is($select, '[multiple]') === true) {
    const data = $select.find('option:selected').map(function () {
      return String(this.value);
    }).get();

    if ($element.hasClass('active') === false) {
      data.push(String($element.data('value')));
    }

    if ($element.hasClass('active') === true) {
      if (data.indexOf(String($element.data('value'))) > -1) {
        data.splice(data.indexOf(String($element.data('value'))), 1);
      }
    }

    $element.toggleClass('active');

    if (data.length > 0) {
      return $select.val(data).trigger('change').next('button').html($select.find('option:selected').map(function () {
        return `<u>${this.innerHTML.trim().replace(/&nbsp;/g, '<i></i>')}</u>`;
      }).get());
    }

    if (data.length <= 0) {
      return $select.val(data).trigger('change').next('button').html(`<em>${$select.data('placeholder')}</em>`);
    }
  }

  if (Helpers.is($select, '[multiple]') === false) {
    $element.addClass('active');

    return $select.val($element.data('value')).trigger('change').next('button').html(
      $element.html().replace(/&nbsp;/g, '<i></i>'),
    )
      .next('.content')
      .find('li[data-option].active')
      .not($element)
      .removeClass('active');
  }

  return false;
}
