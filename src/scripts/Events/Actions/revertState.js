/*
           _           _   _  __
          | |         | | (_)/ _|
  ___  ___| | ___  ___| |_ _| |_ _   _
 / __|/ _ \ |/ _ \/ __| __| |  _| | | |
 \__ \  __/ |  __/ (__| |_| | | | |_| |
 |___/\___|_|\___|\___|\__|_|_|  \__, |
                                  __/ |
                                 |___/

  Description: Conceals selectify options panel.
  Version: 1.0.1
  License: WTFPL
   Author: CFK <cradexco@gmail.com>
     Repo: https://github.com/cfkarakulak/SelectifyJS
*/

export default function revertState($self, event) {
  if ($(event.target).closest('.selectify').length <= 0) {
    $('.selectify').removeClass('active');
  }
}
