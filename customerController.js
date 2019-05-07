//CustomerController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Customer = require('./customer');

//CREATES A NEW CUSTOMER
router.post('/', function (req, res) {
    Customer.create({
            name : req.body.name,
            email : req.body.email,
			address : req.body.address,
			customer_id : req.body.customer_id
        }, 
        function (err, customer) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(customer);
        });
});

//RETURNS ALL THE CUSTOMERS IN THE DATABASE
router.get('/', function (req, res) {
    Customer.find({}, function (err, customers) {
        if (err) return res.status(500).send("There was a problem finding the customers.");
        res.status(200).send(customers);
    });
});

module.exports = router;