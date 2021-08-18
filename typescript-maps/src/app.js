"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var form = document.querySelector("form");
var addressInput = document.getElementById("address");
var GOOGLE_API_KEY = "AIzaSyBQPWKex1dgLoenA7h7K1UNd7QZE8nGxuo";
function searchAddressHandler(event) {
    event.preventDefault();
    var enteredAddress = addressInput.value;
    axios_1["default"]
        .get("https://maps.googleapis.com/maps/api/geocode/json?address=" + (encodeURI(enteredAddress)) + "&key=" + (GOOGLE_API_KEY)).then(function (response) {
        console.log(response.data.results[0]);
    })["catch"](function (err) {
        console.log(err);
    });
}
form.addEventListener("submit", searchAddressHandler);
