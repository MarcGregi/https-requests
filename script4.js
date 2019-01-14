var https = require('https');

function getHTML (options, callback) {


  // callback function that accesses the server information
  https.get(options, function(response) {
  console.log("\n Data stream recieved: ");

  // callback function
  response.on('data', function(d) {
    process.stdout.write(d);
    console.log("\n data is split into chunks");
  });

});

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
