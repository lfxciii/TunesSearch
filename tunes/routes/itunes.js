var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

// gets detaiils based on term and entity
router.get('/search/:term/:entity', async function (req, res, next) {
  let response = null;  
  // send request to itunes
  if (req.params.entity === 'all') {
    // all
    response = await fetch(`https://itunes.apple.com/search?term=${req.params.term}`);
  } else { // if a search field is omitted, general 404 defined in app.js will respond.
    // specific search        
    response = await fetch(`https://itunes.apple.com/search?term=${req.params.term}&entity=${req.params.entity}`);
  }

  // valid response?
  if (response.status === 200) {
    let tunes = await response.json();
    // any hits on search?
    if (tunes.results.length === 0) {
      res.statusCode = 404;
      res.send("Not found");
    } else {
      res.send(JSON.stringify(tunes)); // return to caller
    }
  } else { // no results
    res.statusCode = response.status;
    res.send("Unable to process request");
  }
  // close stream
  res.end();
});

module.exports = router;
