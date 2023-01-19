const request = require('request');
const https = require('https');
const fs = require('fs'); //use node file system when we require node fs modules
//receives CLI Args
const args = process.argv.splice(2);
const url = args[0];
const localFilePath = args[1];
/*
[x]takes two cli arguments
[x]download the data at the url to the local path on your machine
   * [x]make an http request and wait for the response.
      *[x] Install and use the request library to make the HTTP request
   * [x] After the http request is complete (use nested cb to control the order)
   * [] take the data you receive and write it to a file in your local filesystem.
      * [x] get file size by counting the characters
      * [x] Use Node's fs (file system) module to write the file
[x] print out a message like "Downloaded and saved 1235 bytes to ./index.html.
*/
const saveDataToFile = (localFilePath,body) => {
  //const body = bo
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}.`);
  });
};

request(url, saveDataToFile, localFilePath, (error, response, body) => {
  if (error !== null) {
    console.log('error:', error); // Print the error if one occurred
    return error;
  }
  
  console.log('statusCode:', response && response.statusCode);// Print the response status code if a response was received
  saveDataToFile(localFilePath, body);
  
});



