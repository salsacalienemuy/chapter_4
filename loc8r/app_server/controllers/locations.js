/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Pizzac8r - find some pizza',
        pageHeader: {
            title: 'PizzaC8r',
            strapline: 'this is where ypu find pizza!'
        },
        sidebar: "Have Some Pizza at one of these places",
        locations: [{
            name: 'Pizza Planet',
            address: '6801 Bell St',
            rating: 5,
            facilities: ['Pizza, what else?'],
            distance: 'Outer Space'
        }, {
            name: 'Pizza 9',
            address: '2648 SW 34th',
            rating: 4,
            facilities: ['Nothing'],
            distance: '1m'
        }, {
            name: '575 Pizzeria',
            address: '2803 Civic Cir',
            rating: 10,
            facilities: ['Awesomeness'],
            distance: '1m'
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Starcups',
        pageHeader: {
            title: 'Pizza Planet'
        },
        sidebar: {
            context: 'Is on PizzaC8r because it has pizza',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Pizza Planet',
            address: '6801 Bell St',
            rating: 3,
            facilities: ['Pizza, what else?'],
            coords: {
                lat: 35.138876,
                lng: -101.901671
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'The Almighty',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'These guys have got it.'
            }, {
                author: 'Sir Edward Van Halen',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'PIZZAAAAAAA!!!!!.'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};