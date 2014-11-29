'use strict';

var mongoose = require('mongoose'),
    Cookie = mongoose.model('Cookie');

/**
 * Populate database with the base data
 */

//Clear old cookies, then add cookies in
Cookie.find({}).remove(function () {
    Cookie.create({
        name: 'Classic Chocolate Chip',
        description: 'These classic chocolate chip cookies will melt in your mouth and leave you begging for more. A customer states, "You seriously can\'t eat just one!" but you should try for yourself! They are made from premium ingredients: pure cane sugar, dark brown sugar, real butter, and semi-sweet morsels. Treat yourself to these homemade American classic cookies, and enjoy a perfect combination of crunchy on the outside, and chewy on the inside.',
        availability: "true",
        order: 1,
        imagePath: "images/default/ChocoChip.jpg"
    }, {
        name: 'Walnut Chocolate Chip',
        description: 'Walnut Chocolate Chip Cookies are the same perfect cookies as the Classic Chocolate Chip Cookies, but with the added bonus of delicious chopped walnuts, to satisfy anyone\'s nutty side.',
        availability: "true",
        order: 2,
        imagePath: "images/default/WalnutCC.jpg"
    }, {
        name: 'Classic Peanut Butter',
        description: 'These Classic Peanut Butter Cookies might take you back in time, when grandma would treat you to cookies fresh from the oven. Their soft texture, with a sugary topping are simply scrumptious. They are made with creamy peanut butter and all the premium ingredients used in Cookies at Tiffani\'s classic creations.',
        availability: "true",
        order: 3,
        imagePath: "images/default/PB.jpg"
    }, {
        name: 'Peanut Butter with Chocolate Chips',
        description: 'Some people believe that peanut butter cookies are not complete unless they contain chocolate. These are the same perfect cookies as the Classic Peanut Butter Cookies, but with the added bonus of semi-sweet morsels.',
        availability: "true",
        order: 4,
        imagePath: "images/default/PBCC.jpg"
    }, {
        name: 'Classic Sugar Cookie',
        description: 'Besides being buttery, sweet, classic Sugar Cookies, what makes these special is the pretty blue sugar crystals that top each cookie. Some might say that they are pretty and tasty, or pretty tasty!',
        availability: "false",
        imagePath: "images/default/Sugar.jpg"
    }, {
        name: 'Iced Sugar Cookies',
        description: 'Between the buttery and sweet classic sugar cookie and the pretty blue sprinkles is a layer of smooth white Royal Icing. These cookies are not just pretty delicious...they are pretty and delicious!',
        availability: "true",
        order: 5,
        imagePath: "images/default/IcedSugarCover.jpg"
    }, {
        name: 'Snicker Doodle',
        description: 'Snicker Doodle cookies are the number one choice for cinnamon-lovers. Topped with a delicious cinnamon-sugar coating, with a perfect crackle top, these cookies are simply divine!',
        availability: "true",
        order: 6,
        imagePath: "images/default/SnickerDoodle.jpg"
    }, {
        name: 'M&Ms Cookies',
        description: 'With miniature M&M\'s baked into these tasty treats, they are kid-approved. Tap into your fun side with these colorful creations.',
        availability: "true",
        order: 10,
        imagePath: "images/default/M&M.jpg"
    }, {
        name: 'Cocoa Cookies with Peanut Butter Morsels',
        description: 'Tiffani\'s mother used to make these cookies with a devil\'s food cake mix (store bought) and call them Cake Mix Cookies. The combination of a chocolate cookie with peanut butter chips is heavenly. So Tiffani created her own recipe, and now makes them from scratch using Hershey\'s Cocoa and Reese\'s Peanut Butter Morsels. Heavenly and homemade!',
        availability: "true",
        order: 7,
        imagePath: "images/default/CocoaPB.jpg"
    }, {
        name: 'Oatmeal Raisin',
        description: 'For oatmeal lovers, these cookies are a real winner. The combination of oats and raisins, with a slight cinnamon and nutmeg flavor make these cookies incredible!',
        availability: "true",
        order: 8,
        imagePath: "images/default/OatmealRaisin.jpg"
    }, {
        name: 'Oatmeal Chocolate Chip',
        description: 'Oats, cinnamon, nutmeg, and semi-sweet chocolate chips combine to make this cookie unforgettable.',
        availability: "true",
        order: 9,
        imagePath: "images/default/OatCC.jpg"
    }, {
        name: 'Pretzel Toffee Chocolate Chip',
        description: 'These cookies are a twist on the classic chocolate chip cookie. The perfect combination of rich flavors combine to create a deliciously sweet and salty cookie: toffee, salted pretzels, and bitter sweet chocolate chips.',
        availability: "true",
        order: 13,
        imagePath: "images/default/PretzelToffee.jpg"
    }, {
        name: 'Mint Chocolate',
        description: 'Andes mints give these delicious cocoa cookies a fresh, minty flavor. Mixed into a cocoa cookie, it\'s the perfect combination!',
        availability: "true",
        order: 14,
        imagePath: "images/default/Mint.jpg"
    }, {
        name: 'Salted Caramel',
        description: 'Caramel bits baked into a cocoa cookie, and salt sprinkled on the top...a palate-pleaser with the perfect combination of sweet and salty.',
        availability: "true",
        order: 12,
        imagePath: "images/default/SaltedCaramel.jpg"
    }, {
        name: 'White Chocolate Mocha',
        description: 'Coffee lovers, rejoice! Coffee granules are baked into cocoa cookies, and the white chocolate gives them a sense of cream. Perfect morning, noon, or night!',
        availability: "true",
        order: 11,
        imagePath: "images/default/WhiteChocolateMocha.jpg"
    }, {
        name: 'Cocoa Cranberry',
        description: 'A double chocolate cookie, with cranberries baked in and a little sugar sprinkled on top, is the perfect cookie to warm your belly on a cool winter\'s night (or anytime your sweet tooth demands a treat). These cookies are only available December through February.',
        availability: "true",
        order: 20,
        imagePath: "images/default/CocoaCran.jpg"
    }, {
        name: 'Lemon Almond Poppy Seed',
        description: 'Fresh flavors, just in time for spring! These buttery gems are made with real lemon zest, lemon essential oils (doTERRA), almond slices, and poppy seeds. The combination of flavors is beyond delicious! These cookies are only available March through May.',
        availability: "false",
        order: 21,
        imagePath: "images/default/LemonAlmond.jpg"
    }, {
        name: 'Red Velvet',
        description: 'Make someone\'s Valentine\'s Day a little sweeter with moist red velvet cookies. These cookies are only available February 1st through the 14th.',
        availability: "false",
        order: 22,
        imagePath: "images/default/ChocoChip.jpg"
    }, {
        name: 'Red Velvet with Premium White Chocolate',
        description: 'White chocolate morsels take the red velvet cookies to a new level of yum!',
        availability: "false",
        order: 23,
        imagePath: "images/default/ChocoChip.jpg"
    }, function () {
        console.log('Finished populating cookie data');
    });
});
