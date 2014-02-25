'use strict';

angular.module('mockedAwesomeThingsAPI', [])
    .value('_get_Response', [
        {
            "name": "Brand spankin' new application for ordering",
            "info": "Will automatically send order request by email.",
            "awesomeness": 10,
            "_id": "530c34e386088d842c000001",
            "__v": 0
        },
        {
            "name": "Form Requirements",
            "info": "Will ensure that all order requests have the expected inputs",
            "awesomeness": 10,
            "_id": "530c34e386088d842c000002",
            "__v": 0
        },
        {
            "name": "Confirmation",
            "info": "Will give user feedback of success/failure of order request",
            "awesomeness": 10,
            "_id": "530c34e386088d842c000003",
            "__v": 0
        },
        {
            "name": "Availability",
            "info": "Will deploy to Heroku to ensure availability regardless of development machine",
            "awesomeness": 10,
            "_id": "530c34e386088d842c000004",
            "__v": 0
        }
    ]);