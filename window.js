const markdown = require("markdown").markdown;
const remote = require("electron").remote;
const fs = require("fs");

$(() => {

  arguments = remote.getGlobal('sharedObject').prop;
  
  fs.readFile(arguments[2], "utf-8", (err, data) => {
    if (err) {
      alert("An error ocurred reading the file :" + err.message);
      return;
    }
    $("#mdBody").html(markdown.toHTML(data));
  });

  $("#close-btn").click(function(e) {
    var window = remote.getCurrentWindow();
    window.close();
  });
});
