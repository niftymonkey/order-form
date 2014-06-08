'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Cookie = mongoose.model('Cookie');

////////////////////////////////////////////////////////////////
// API module
//
// This module exposes the various API endpoints that will be
// used in our application
////////////////////////////////////////////////////////////////

/**
 * Get awesome things
 */
exports.awesomeThings = function (req, res) {
    return Thing.find(function (err, things) {
        if (!err) {
            return res.json(things);
        } else {
            return res.send(err);
        }
    });
};

/**
 * Get cookies
 */
exports.getAllCookies = function (req, res) {
    return Cookie.find(function (err, cookies) {
        if (!err) {
            return res.json(cookies);
        } else {
            return res.send(err);
        }
    });
};