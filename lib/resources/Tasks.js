'use strict';

var HyperTrackResource = require('../HyperTrackResource');
var hypertrackMethod = HyperTrackResource.method;

module.exports = HyperTrackResource.extend({

  path: 'tasks/',

  includeBasic: [
    'create', 'list', 'retrieve', 'update',
  ],

  complete: hypertrackMethod({
    method: 'POST',
    path: '/{id}/completed/',
    urlParams: ['id'],
  }),

});