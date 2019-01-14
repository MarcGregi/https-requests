var https = require('https');

function getAndPrintHTML (options) {


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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);