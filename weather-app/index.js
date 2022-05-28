import { AsyncWeather } from "@cicciosgamino/openweather-apis";
import http from "http";
import { myLogger } from "mondayu-logger-tom-portugez";
// import your own logger

// step 1: install lib and print temp to console
const apiKey = "6915845220e3fe2caa6fdc114ce6e687";
const weatherInitializer = new AsyncWeather();
const weatherAPI = await weatherInitializer;

weatherAPI.setApiKey(apiKey);
weatherAPI.setCityId(293397);

const temp = await weatherAPI.getTemperature();
myLogger.log(`the temp in TA is ${temp}`);

// step 2: server
// create your server here from http module
// example in the slides or here: https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/
const requestListener = function (req, res) {
    myLogger.log(`starting the log`)
    res.writeHead(200);
    res.end(`the temp in TA is ${temp}`);
};

const server = http.createServer(requestListener);
server.listen(8080);
// start your server

// step 3: install your logger and log temp and server start
// log that the service has started
