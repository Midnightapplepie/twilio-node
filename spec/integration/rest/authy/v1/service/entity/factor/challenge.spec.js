'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Challenge', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities('identity')
                                   .factors('YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .challenges.create();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        identity: 'identity',
        factorSid: 'YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://authy.twilio.com/v1/Services/<%= serviceSid %>/Entities/<%= identity %>/Factors/<%= factorSid %>/Challenges')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'sid': 'YCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'ff483d1ff591898a9942916050d2ca3f',
          'factor_sid': 'YFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'date_responded': '2015-07-30T20:00:00Z',
          'expiration_date': '2015-07-30T20:00:00Z',
          'verification_sid': 'VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'pending',
          'reason': 'none',
          'details': 'Hi! Mr. John Doe, would you like to sign up?',
          'hidden_details': 'Hidden details about the sign up',
          'type': 'sms',
          'url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Factors/YFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Challenges/YCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities('identity')
                                   .factors('YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .challenges.create();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities('identity')
                                   .factors('YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .challenges('sid').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        identity: 'identity',
        factorSid: 'YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'sid'
      };
      var url = _.template('https://authy.twilio.com/v1/Services/<%= serviceSid %>/Entities/<%= identity %>/Factors/<%= factorSid %>/Challenges/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities('identity')
                                   .factors('YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .challenges('sid').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities('identity')
                                   .factors('YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .challenges('sid').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        identity: 'identity',
        factorSid: 'YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'sid'
      };
      var url = _.template('https://authy.twilio.com/v1/Services/<%= serviceSid %>/Entities/<%= identity %>/Factors/<%= factorSid %>/Challenges/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch_sid response',
    function() {
      var body = JSON.stringify({
          'sid': 'YCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'ff483d1ff591898a9942916050d2ca3f',
          'factor_sid': 'YFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'date_responded': '2015-07-30T20:00:00Z',
          'expiration_date': '2015-07-30T20:00:00Z',
          'verification_sid': 'VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'pending',
          'reason': 'none',
          'details': 'details',
          'hidden_details': 'hidden_details',
          'type': 'sms',
          'url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Factors/YFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Challenges/YCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities('identity')
                                   .factors('YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .challenges('sid').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid fetch_latest response',
    function() {
      var body = JSON.stringify({
          'sid': 'YCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'ff483d1ff591898a9942916050d2ca3f',
          'factor_sid': 'YFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'date_responded': '2015-07-30T20:00:00Z',
          'expiration_date': '2015-07-30T20:00:00Z',
          'verification_sid': 'VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'pending',
          'reason': 'none',
          'details': 'details',
          'hidden_details': 'hidden_details',
          'type': 'sms',
          'url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Factors/YFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Challenges/YCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities('identity')
                                   .factors('YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .challenges('sid').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid update request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities('identity')
                                   .factors('YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .challenges('sid').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        identity: 'identity',
        factorSid: 'YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'sid'
      };
      var url = _.template('https://authy.twilio.com/v1/Services/<%= serviceSid %>/Entities/<%= identity %>/Factors/<%= factorSid %>/Challenges/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid verify_sid response',
    function() {
      var body = JSON.stringify({
          'sid': 'YCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'ff483d1ff591898a9942916050d2ca3f',
          'factor_sid': 'YFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'date_responded': '2015-07-30T20:00:00Z',
          'expiration_date': '2015-07-30T20:00:00Z',
          'verification_sid': 'VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'approved',
          'reason': 'none',
          'details': 'Hi! Mr. John Doe, would you like to sign up?',
          'hidden_details': 'Hidden details about the sign up',
          'type': 'sms',
          'url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Factors/YFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Challenges/YCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities('identity')
                                   .factors('YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .challenges('sid').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid verify_latest response',
    function() {
      var body = JSON.stringify({
          'sid': 'YCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'entity_sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'ff483d1ff591898a9942916050d2ca3f',
          'factor_sid': 'YFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'date_responded': '2015-07-30T20:00:00Z',
          'expiration_date': '2015-07-30T20:00:00Z',
          'verification_sid': 'VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'approved',
          'reason': 'none',
          'details': 'Hi! Mr. John Doe, would you like to sign up?',
          'hidden_details': 'Hidden details about the sign up',
          'type': 'sms',
          'url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Factors/YFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Challenges/YCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities('identity')
                                   .factors('YFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .challenges('sid').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});
