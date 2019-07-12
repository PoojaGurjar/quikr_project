const axios = require('axios');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

app.get('/search/:days/:interval/:cat', function (req, res) {
    // let query = req.query.queryStr;
    // let url = `https://your.service.org?query=${query}`;

    var data = JSON.stringify({
        "lastmdays": req.params.days,
        "interval": req.params.interval,
        "topmcat": req.params.cat
    });

    axios({
        method: 'post',
        url: 'http://6011.dockersanity2.quikrcorp.com/alert/v1/fetchTrendingEntities',
        headers: {
            "Content-Type": "application/json",
            "X-Quikr-Client": "test",
            "Access-Control-Allow-Origin": "*"
        },
        data: {
            "lastmdays": req.params.days,
            "interval": req.params.interval,
            "topmcat": req.params.cat
        }
    })
        .then(function (response) {
            //res.save(response.data);
            res.send(response.data);
            res.end();
        })
        .catch(function (error) {
            console.log(error);
        });


});

//app.get('/', cors(), (req, res) => res.send('Hello World with Express'));

app.listen(port);