'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Cookie Schema
 */
var CookieSchema = new Schema({
    name: String,
    description: String,
    availability: String,
    imagePath: String
});

/**
 * Validations
 */
CookieSchema
    .path('name')
    .validate(function (value) {
        return value !== undefined;
    }, 'Name must not be empty');

mongoose.model('Cookie', CookieSchema);
