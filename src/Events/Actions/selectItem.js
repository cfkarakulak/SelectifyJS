/*
           _           _   _  __
          | |         | | (_)/ _|
  ___  ___| | ___  ___| |_ _| |_ _   _
 / __|/ _ \ |/ _ \/ __| __| |  _| | | |
 \__ \  __/ |  __/ (__| |_| | | | |_| |
 |___/\___|_|\___|\___|\__|_|_|  \__, |
                                  __/ |
                                 |___/

  Description: Select selected item by watching selection ?
  Version: 1.0.0
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/SelectifyJS
*/

import Helpers from '../../Helpers/Helpers';
import updateItem from './updateItem';

export default function selectItem($self) {
  const $select = $self.closest('.selectify').children('select');

  if (Helpers.is($select, '[multiple]') === true) {
    return updateItem($self);
  }

  if (Helpers.is($select, '[multiple]') === false) {
    if ($self.hasClass('active') === true) {
      return $self.closest('.selectify').removeClass('active');
    }

    if ($self.hasClass('active') === false) {
      return updateItem($self).closest('.selectify').removeClass('active');
    }
  }

  return false;
}
