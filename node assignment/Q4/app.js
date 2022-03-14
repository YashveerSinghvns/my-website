var async = require("async");
const fs = require('fs');
const request = require('request');

var async = require("async");
let i=0;
let v=0;
let k =0;
var obj = [ "https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg"
,"http://sousmonarbre.com/qphj/bd963843d2239ed78aa6f7b0a36b537d/qdp/shapely-table-mat-design-office-bay-decoration-mes-at-work-decorating-ideas-office-decoration-mes-design-ideas-cream-wall-paint-decoration-messroom-wooden-laminate-ing-tosca-color__office-decorating-ideas.jpg"
,"https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg"
,"https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg"
,"https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg"
,"https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg"
];
var configs = {};

async.forEachOf(obj, (value, key, callback) => {
    request(obj[i]).pipe(fs.createWriteStream(`${k}/${i}.png`));
    i++;
    v++;

console.log(i)
    if(v === 4)
    { k++;v=0; }

}, err => {
    if (err) console.error(err.message);
    // configs is now a map of JSON data
    doSomethingWith(configs);
});

console.log("ih")
//request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))

