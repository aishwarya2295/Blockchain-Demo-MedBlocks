var express = require('express');
var path = require('path');
var app = express();




app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {

    res.sendFile(__dirname + "/" + "lab_details.html");

});




app.get('/prescription_details', function (req, res) {

    // Prepare output in JSON format


    response = {
        name: req.query.name,

        disease: req.query.disease,

        medication: req.query.medication,

        duration: req.query.duration,

    };
    //write a function and pass response
    module.exports = response;

    var calldatfile = require('./helloblockchain.js');
    //res.redirect('/nodetobc');

    res.end(JSON.stringify(response));

});

app.get('/lab_det', function (req, res) {

    // Prepare output in JSON format
    lab_response = {
        name: req.query.u_name,

        lab_name: req.query.lab_name,

        report_type: req.query.report_type,

        date: req.query.r_date,

        impression: req.query.impression,

        findings: req.query.findings

    };

    //write a function and pass response
    module.exports = lab_response;

    var calldatfile = require('./helloblockchain.js');
    //res.redirect('/nodetobc');

    res.end(JSON.stringify(lab_response));

});




var server = app.listen(8081, function () {

    var host = server.address().address;

    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);




})