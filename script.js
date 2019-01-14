var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };


  https.get(requestOptions, function(response) {
  console.log('statusCode:', response.statusCode);
  console.log('\n headers:', response.headers);


  response.on('data', function(d) {
    process.stdout.write(d);
    console.log("\n data is being written");
  });

});
}


getAndPrintHTMLChunks();