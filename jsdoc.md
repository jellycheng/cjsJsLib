

/* global define:true module:true window: true */
if (typeof define === 'function' && define['amd']) {
  define(function() { return RSVP; });
} else if (typeof module !== 'undefined' && module['exports']) {
  module['exports'] = RSVP;
}

