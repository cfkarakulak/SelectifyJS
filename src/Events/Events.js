/*
           _           _   _  __
          | |         | | (_)/ _|
  ___  ___| | ___  ___| |_ _| |_ _   _
 / __|/ _ \ |/ _ \/ __| __| |  _| | | |
 \__ \  __/ |  __/ (__| |_| | | | |_| |
 |___/\___|_|\___|\___|\__|_|_|  \__, |
                                  __/ |
                                 |___/

  Description: Bootstrap for event listeners and what not.
  Version: 1.0.0
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/SelectifyJS
*/

import toggleButton from './Actions/toggleButton';
import selectItem from './Actions/selectItem';
import filterItem from './Actions/filterItem';
import moveCurrent from './Actions/moveCurrent';
import shortcutSupport from './Actions/shortcutSupport';
import revertState from './Actions/revertState';

export default class Events {
  constructor() {
    this.events = [];
  }

  add(event) {
    if (event.element) {
      $(document).on(event.event, event.element, event.handler);
    }

    if (!event.element) {
      $(document).on(event.event, event.handler);
    }

    this.events.push(event);

    return this.events;
  }

  toggleButton(event) {
    return toggleButton($(this), event);
  }

  selectItem(event) {
    return selectItem($(this), event);
  }

  filterItem(event) {
    return filterItem($(this), event);
  }

  moveCurrent(event) {
    return moveCurrent($(this), event);
  }

  shortcutSupport(event) {
    return shortcutSupport($(this), event);
  }

  revertState(event) {
    return revertState($(this), event);
  }
}
