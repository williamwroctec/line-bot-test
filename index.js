var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1588600822,
  channelSecret: ba8c4ba770e8254a9af66f4c74957ed3,
  channelAccessToken: Mn5kESWkl0AYcQebxwVvdEUkOcmpVS5h5KDjhEMz3WFDBO6RyDrhgoKweiI4HMszIh/0AxMeqd93xnwIQUMfao4coGPqSCBlFwNRlkj1MUD0e2rHaQmTSO/2yg9x24tsYyLFeUPjmK882gJdk/d1+gdB04t89/1O/w1cDnyilFU=
});

bot.on('message', function(event) {
  console.log(event); //?????? event ?????
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//?? express ??? port 3000,? heroku ??????,?????????
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});