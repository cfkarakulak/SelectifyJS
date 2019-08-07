import './Selectify';

/* eslint-disable no-unused-vars */

const selectify = $('select').Selectify({
  initialize: ($element) => {
    $element.find('[data-content]').removeAttr('data-content');
  },
});

selectify.on('change', () => {
  // console.log('changed', $(this));
});
