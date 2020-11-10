import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);


// Fetch JSON initialization
const fetchJson = require('../vendor/fetch-json.js');

const url = 'https://api.sofascore.com/api/v1/sport/football/trending-top-players';
const handleData = (data) =>
    toJson(data);
var ttp = fetchJson.get(url).then(handleData);
console.log(ttp);