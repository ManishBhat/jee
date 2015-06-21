var lazy=require("lazy"),
    fs = require("fs");

    var results = [];

    new lazy(fs.createReadStream('raw.txt'))
        .lines
        .forEach(function(line){
          var str = line.toString();
          var arr = str.split(",");
          var res = {};
          res["category"] = arr[3];
          res["rollno"] = arr[2];
          res["name"] = arr[1];
          res["rank"] = arr[0];
          results.push(res);

          // console.log(res["air"]+'done');
        }).on('pipe', function(){
          console.log(results[0]);

          fs.writeFile('../data/2015/json/results_new.json', JSON.stringify({'results':results}), function (err) {
            if (err) throw err
            console.log('done')
          })
        })

    
    
