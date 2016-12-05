'use strict';

var hypertrack = require('./testUtils').getSpyableHyperTrack();
var expect = require('chai').expect;

describe('fleet Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      hypertrack.fleets.retrieve('fleetID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/fleets/fleetID123/',
        data: {},
        headers: {},
      });
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      hypertrack.fleets.create({
        action: 'delivery',
        fleet_id: 'fleetID123'
      });
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/api/v1/fleets/',
        data: {
          action: 'delivery',
          fleet_id: 'fleetID123'
        },
        headers: {},
      });
    });

  });

  describe('list', function() {
    it('Sends the correct request', function() {
      hypertrack.fleets.list();
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/api/v1/fleets/',
        data: {},
        headers: {},
      });
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      hypertrack.fleets.update('fleetID123', {action: 'pickup'});
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'PATCH',
        url: '/api/v1/fleets/fleetID123/',
        headers: {},
        data: {action: 'pickup'},
      });
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      hypertrack.fleets.del('fleetID123');
      expect(hypertrack.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/api/v1/fleets/fleetID123/',
        headers: {},
        data: {},
      });
    });
  });

});
