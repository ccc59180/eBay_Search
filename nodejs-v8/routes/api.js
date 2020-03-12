const express = require("express");
const router = express.Router();
const logger = require("morgan");
const axios = require("axios");
//const yelp = require("yelp-fusion");
const path = require('path');


var form = null;
var result = {};

const key = "AIzaSyBXJZOfWGzQ9I31v3liRqb4RumMPeC2Tbo";

router.get("/", (req, res, next) => {
  res.send("test2");
  //res.sendFile((path.join(__dirname, '../dist/ang-node/index.html')))
});

async function searchHandler(req, res) {

    let response;
    let form = req.query;
    //let location = form.location;
    //let locationRes;
    let category = form.category;
    let category_id = "";
  
    if (category == "Art")  category_id = "550";
    if (category == "Baby")  category_id = "2984";
    if (category == "Books")  category_id = "267";
    if (category == "Clothing, Shoes & Accessories")  category_id = "11450";
    if (category == "Computers/Tablets & Networking")  category_id = "58058";
    if (category == "Health & Beauty")  category_id = "26395";
    if (category == "Music")  category_id = "11233";
    if (category == "Video Games & Consoles")  category_id = "1249";
  
    if (form.isUserInput == "false") {
      form.geoJson = JSON.parse(form.geoJson);
    } else {
      form.geoJson = form.location;
    }
    // console.log(form.keyword);
  
    let url = 
      "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=LijianCa-Chrisx27-PRD-c16de56b6-c9aa224c&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=50&keywords=" +
      form.keyword;

    // console.log(encodeURIComponent(form.keyword));
  
  
    if (category != "All Categories") {
      url += "&categoryId=" + category_id;
    }
  
  
    let num_of_filter = 2;
    url += "&buyerPostalCode=" + form.geoJson;
    url += "&itemFilter(0).name=HideDuplicateItems&itemFilter(0).value=true&itemFilter(1).name=MaxDistance&itemFilter(1).value=" + form.distance;
  
    let i = 0;
    let condition_all = "";
    let resUnspecified = "";
    let resNew = "";
    let resUsed = "";
    if (form.condition_unspecified == "true") {
      resUnspecified = "Unspecified";
    }
    if (form.condition_new == "true") {
      resNew = "New";
    }
    if (form.condition_used == "true") {
      resUsed = "Used";
    }

    let condition_pending = new Array(resUnspecified,resNew,resUsed);
    for (let j = 0; j < 3; j++) {
      if (condition_pending[j] != "") {
  
        condition_all += "&itemFilter(" + num_of_filter + ").value(" + i + ")=" + condition_pending[j];
        i++;
      }
    }
    if (i != 0) {
      num_of_filter++;
      url += "&itemFilter(" + (num_of_filter - 1) + ").name=Condition" + condition_all;
    }
    if (form.shipOption_pick != "") {
      url += "&itemFilter(" + num_of_filter + ").name=LocalPickupOnly&itemFilter(" + num_of_filter + ").value=true";
      num_of_filter++;
    }
    if (form.shipOption_ship != "") {
      url += "&itemFilter(" + num_of_filter + ").name=FreeShippingOnly&itemFilter(" + num_of_filter + ").value=true";
      num_of_filter++;
    }

    url += "&outputSelector(0)=SellerInfo&outputSelector(1)=StoreInfo";
  
    //console.log(url);
    response = await axios.get(url);
  
    let result = response.data;
    //console.log(result);
    res.send(result);

 
}

router.get("/api/search", (req, res) => {
  //console.log("getin");
  searchHandler(req, res);
});


router.get("/api/detail_info", (req, res) => {
  // console.log(req);
  detailInfoHandler(req, res);
});

async function detailInfoHandler(req, res) {
  let place_id = req.query.title;
  //console.log(query);
  // console.log(place_id);
  let response;

  let url = "http://open.api.ebay.com/shopping?callname=GetSingleItem&responseencoding=JSON&appid=LijianCa-Chrisx27-PRD-c16de56b6-c9aa224c&siteid=0&version=967&ItemID=" +
    place_id +
  "&IncludeSelector=Description,Details,ItemSpecifics";
  //console.log(url);
  response = await axios.get(url);

  let result = response.data;
  //console.log(result);
  res.send(result);
}


router.get("/api/photo_info", (req, res) => {
  photoInfoHandler(req, res);
});

async function photoInfoHandler(req, res) {
  let tempTitle = req.query.title;
  //console.log(tempTitle);
  let title = encodeURI(tempTitle);
  //console.log(title);

  let response; 
  let url = "https://www.googleapis.com/customsearch/v1?q=" +
    title +
    "&cx=006473416161420143702:cs7zcit1uiu&imgSize=huge&imgType=news&num=8&searchType=image&key=AIzaSyCYUL4CJQPFI66bdI5uzFhZlubSnhdT8bo";

  response = await axios.get(url);
  // console.log(response);

  let result = response.data;
  res.send(result);
}


router.get("/api/similar", (req, res) => {
  //console.log(req);
  siimlarHandler(req, res);
});

async function siimlarHandler(req, res) {
  let itemId = req.query.title;
  let response; 
  
  let url = "http://svcs.ebay.com/MerchandisingService?OPERATION-NAME=getSimilarItems&SERVICE-NAME=MerchandisingService&SERVICE-VERSION=1.1.0&CONSUMER-ID=LijianCa-Chrisx27-PRD-c16de56b6-c9aa224c&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&itemId=" +
    itemId +
    "&maxResults=20";

  response = await axios.get(url);

  let result = response.data;
  // console.log(result);
  res.send(result);
}

router.get("/api/zip_info", (req, res) => {
  // console.log(req);
  zipInfoHandler(req, res);
});

async function zipInfoHandler(req, res) {
  let zip_id = req.query.zip;
  //console.log(query);
  // console.log(place_id);
  let response;

  let url = "http://api.geonames.org/postalCodeSearchJSON?postalcode_startsWith=" + zip_id +
    "&username=lijianca&country=US&maxRows=5";

  //console.log(url);
  response = await axios.get(url);

  let result = response.data;
  //console.log(result);
  res.send(result);
}

module.exports = router;
