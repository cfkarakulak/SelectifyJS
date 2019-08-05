import './Selectify';

/* eslint-disable no-unused-vars */

const selectify = $('select').Selectify({
  initialize: ($element) => {
    console.log($element);
  },
});

selectify.on('change', function () {
  console.log('changed', $(this));
});
