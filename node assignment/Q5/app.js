
const csv = require('csv-parser')
const fs = require('fs')
    var jsonToCsv = require('convert-json-to-csv');
var shortUrl = require("node-url-shortener");
var obj = [ "https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg"
,"http://sousmonarbre.com/qphj/bd963843d2239ed78aa6f7b0a36b537d/qdp/shapely-table-mat-design-office-bay-decoration-mes-at-work-decorating-ideas-office-decoration-mes-design-ideas-cream-wall-paint-decoration-messroom-wooden-laminate-ing-tosca-color__office-decorating-ideas.jpg"
,"https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg"
,"https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg"
,"https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg"
,"https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg"
];
let s;
let results = [];
   // let s;
   let m = function() {
   for(let i=0;i<obj.length ;i++)
   {
shortUrl.short(obj[i], function (err, url) {
    console.log(url);
    results.push(url);
    //console.log(results);
});
}
};



m();
  
  setTimeout(function(){
   // resolve("Promise is resolved!"); // fulfilled
   console.log(results);
       var arrayOfArraysCsv = jsonToCsv.convertArrayOfArrays(results);
       fs.writeFile("data.csv", arrayOfArraysCsv  , (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("data.csv", "utf8"));
        }
      });

}, 3000);

/*
fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });
  */
  


    