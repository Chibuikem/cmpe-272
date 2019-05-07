//CustomerController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Order = require('./order');

//CREATES A NEW ORDER
router.post('/', function (req, res) {
    Order.create({
            customer_id : req.body.customer_id,
            title : req.body.title,
			quantity : req.body.quantity
        }, 
        function (err, order) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(order);
        });
});

//RETURNS ALL ORDERS IN THE DATABASE
router.get('/', function (req, res) {
    Order.find({}, function (err, orders) {
        if (err) return res.status(500).send("There was a problem finding inventory.");
        res.status(200).send(orders);
    });
})

module.exports = router;