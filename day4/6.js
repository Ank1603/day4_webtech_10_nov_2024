"use strict";
var category = [
  "computer",
  "mechanical",
  "electronics",
  "healthcare",
  "agriculture",
];

var products = [
  {
    name: "HP Laptop",
    price: 50000,
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfUrTMlZjzQncknnLg3XoHhlSKsKy7ajVGw&s",
  },
  {
    name: "Dell Laptop",
    price: 60000,
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-VLAYNR8JREsuk2EmfE8n5MkJ1gtcoMlDA&shttps://cdn.britannica.com/68/121668-050-F3715C38/MacBook-Air-laptop-computer.jpg",
  },
  {
    name: "Lenova Laptop",
    price: 80000,
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-VLAYNR8JREsuk2EmfE8n5MkJ1gtcoMlDA&s",
  },
];
//{} we have n objects each with 5 properties
//short circuit operator is used here to avoid unnecessary iterations and sorting if no products match the category
//for each loop required call back function

category &&
  category.length > 0 &&
  category.forEach(function (v, i) {
    console.log(v, i);

    var listtag = document.createElement("li");
    console.log(listtag);
    //li is blank

    listtag.innerHTML = v;

    document.querySelector("ul").append(listtag);
  });

products &&
  products.length > 0 &&
  products.forEach(function (v, i) {
    console.log(v, i);

    var divtag = document.createElement("div");
    console.log(divtag);

    divtag.className = "col-xl-4 text-center";

    var imgtag = document.createElement("img");
    var h2tag = document.createElement("h2");
    var ptag = document.createElement("p");

    imgtag.src = v.path;

    imgtag.className = "img-fluid";

    h2tag.innerHTML = v.price;
    ptag.innerHTML = v.name;

    divtag.append(imgtag, h2tag, ptag);

    document.getElementById("row").append(divtag);
  });
