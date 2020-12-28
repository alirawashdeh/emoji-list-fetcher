const fetch = require('node-fetch');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');

fetch('https://unicode.org/emoji/charts/emoji-list.html')
    .then(res => res.text())
    .then(body =>
      {
        const dom = new JSDOM(body);
        var result = [];

        var rows = dom.window.document.getElementsByTagName("tr");
        var i;
        for (i = 0; i < rows.length; i++) {
          var cells = rows[i].getElementsByTagName("td");
          var images = rows[i].getElementsByTagName("img");

          if(cells.length > 4){

          var emoji;
          if(images.length > 0) emoji = images[0].alt;
          var unified = cells[1].children[0].innerHTML.split("U+").join("").split(" ").join("-");
          var keywords = cells[4].innerHTML.split(" | ").join("|");

          result.push(
            { unicode: cells[1].children[0].innerHTML,
              unified: unified,
              emoji: emoji,
              shortname: cells[3].innerHTML,
              keywords: keywords}
          );
      }
    }
    var json = JSON.stringify(result, null, "\t");
    console.log(json);
    fs.writeFileSync('emoji-list.json', json);
  });
