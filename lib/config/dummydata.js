'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function () {
    Thing.create({
        name: 'Brand spankin\' new application for ordering',
        info: 'Will automatically send order request by email.',
        awesomeness: 10
    }, {
        name: 'Form Requirements',
        info: 'Will ensure that all order requests have the expected inputs',
        awesomeness: 10
    }, {
        name: 'Confirmation',
        info: 'Will give user feedback of success/failure of order request',
        awesomeness: 10
    }, {
        name: 'Availability',
        info: 'Will deploy to Heroku to ensure availability regardless of development machine',
        awesomeness: 10
    }, function () {
        console.log('finished populating things');
    });
});
