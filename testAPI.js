var request = require("request");
const fs = require("fs");

var options = {
  method: "POST",
  url: "https://quickchart.io/wordcloud",
  headers: {},
  body: {
    format: "png",
    width: 1000,
    height: 1000,
    fontFamily: "sans-serif",
    fontScale: 15,
    scale: "linear",
    text: "<churchill's full speech churchill churchill churchill churchill churchill>",
  },
  json: true,
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  //fs.appendFileSync("word.png", response);
  console.log(body);
});
