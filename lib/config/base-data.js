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
        availability: "",
        imagePath: "images/default/ChocoChip.jpg"
    }, {
        name: 'Walnut Chocolate Chip',
        description: 'Walnut Chocolate Chip Cookies are the same perfect cookies as the Classic Chocolate Chip Cookies, but with the added bonus of delicious chopped walnuts, to satisfy anyone\'s nutty side.',
        availability: "",
        imagePath: "images/default/WalnutCC.jpg"
    }, {
        name: 'Classic Peanut Butter',
        description: 'These Classic Peanut Butter Cookies might take you back in time, when grandma would treat you to cookies fresh from the oven. Their soft texture, with a sugary topping are simply scrumptious. They are made with creamy peanut butter and all the premium ingredients used in Cookies at Tiffani\'s classic creations.',
        availability: "",
        imagePath: "images/default/PB.jpg"
    }, {
        name: 'Peanut Butter with Chocolate Chips',
        description: 'Some people believe that peanut butter cookies are not complete unless they contain chocolate. These are the same perfect cookies as the Classic Peanut Butter Cookies, but with the added bonus of semi-sweet morsels.',
        availability: "",
        imagePath: "images/default/PBCC.jpg"
    }, {
        name: 'Classic Sugar Cookie',
        description: 'Besides being buttery, sweet, classic Sugar Cookies, what makes these special is the pretty blue sugar crystals that top each cookie. Some might say that they are pretty and tasty, or pretty tasty!',
        availability: "",
        imagePath: "images/default/Sugar.jpg"
    }, {
        name: 'Snicker Doodle',
        description: 'Snicker Doodle cookies are the number one choice for cinnamon-lovers. Topped with a delicious cinnamon-sugar coating, with a perfect crackle top, these cookies are simply divine!',
        availability: "",
        imagePath: "images/default/SnickerDoodle.jpg"
    }, {
        name: 'Cocoa with Peanut Butter Morsels',
        description: 'Tiffani\'s mother used to make these cookies with a devil\'s food cake mix (store bought) and call them Cake Mix Cookies. The combination of a chocolate cookie with peanut butter chips is heavenly. So Tiffani created her own recipe, and now makes them from scratch using Hershey\'s Cocoa and Reese\'s Peanut Butter Morsels. Heavenly and homemade!',
        availability: "",
        imagePath: "images/default/CocoaPB.jpg"
    }, {
        name: 'Oatmeal Raisin',
        description: 'For oatmeal lovers, these cookies are a real winner. The combination of oats and raisins, with a slight cinnamon and nutmeg flavor make these cookies incredible!',
        availability: "",
        imagePath: "images/default/OatmealRaisin.jpg"
    }, {
        name: 'Cocoa Cranberry',
        description: 'A double chocolate cookie, with cranberries baked in and a little sugar sprinkled on top, is the perfect cookie to warm your belly on a cool winter\'s night (or anytime your sweet tooth demands a treat). These cookies are only available December through February.',
        availability: "seasonal",
        imagePath: "images/default/CocoaCran.jpg"
    }, {
        name: 'Lemon Almond Poppy Seed',
        description: 'Fresh flavors, just in time for spring! These buttery gems are made with real lemon zest, lemon essential oils (doTERRA), almond slices, and poppy seeds. The combination of flavors is beyond delicious! These cookies are only available March through May.',
        availability: "seasonal",
        imagePath: "images/default/LemonAlmond.jpg"
    }, {
        name: 'Red Velvet',
        description: 'Make someone\'s Valentine\'s Day a little sweeter with moist red velvet cookies. These cookies are only available February 1st through the 14th.',
        availability: "seasonal",
        imagePath: "images/default/ChocoChip.jpg"
    }, {
        name: 'Red Velvet with Premium White Chocolate',
        description: 'White chocolate morsels take the red velvet cookies to a new level of yum!',
        availability: "seasonal",
        imagePath: "images/default/ChocoChip.jpg"
    }, function () {
        console.log('Finished populating cookie data');
    });
});
