'use strict';

require('../scripts/Selectify');

/* eslint-disable no-unused-vars */

var selectify = $('select').Selectify({
  initialize: function initialize($element) {
    $element.find('[data-content]').removeAttr('data-content');
  }
});

selectify.on('change', function () {
  // console.log('changed', $(this));
});