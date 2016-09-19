var request = require('request');

var API_KEY = 'MYAPIKEYXXXXYYY'; // ThingSpeak 'write' API key

/**
 * Data needs to be a JSON object with
 * the format field1:value, field2:value
 * and so on for as many data points you wish
 * to update at once.
 * @param data
 */
function uploadData(data) {
    request.post(
        'https://api.thingspeak.com/update',
        { json: data, api_key:API_KEY },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        }
    );
}