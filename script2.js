var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  // callback function
  https.get(requestOptions, function(response) {
  console.log("\n Data stream recieved: ");

  // callback function
  response.on('data', function(d) {
    const buffString = [];
    process.stdout.write(d);
    for (i = 0; i < d.length; i++) {
      if (d >= 5 && d <= 10) {
        buffString = response.push(d[i]); {
          return buffString;
        }
      }
    }

  });

});

}
// Call the function to test
getAndPrintHTML();