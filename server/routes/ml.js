const fetch = require('node-fetch');

var express = require('express');
var router = express.Router();

/* GET users listing. */
const postRequest = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });

    return await response.json();
};

router.post('/similarity', async function(req, res, next) {
    if (!req.body) {
        res.send([]);
    }
    const users = await postRequest('http://127.0.0.1:5000/', req.body);
    res.send(users);
});

module.exports = router;
