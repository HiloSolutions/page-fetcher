/*
[x]takes two cli arguments
   * [x]make an http request and wait for the response.
      *[x] Install and use the request library to make the HTTP request
   * [x] After the http request is complete (use nested cb to control the order)
[]download the data at the url to the local path on your machine
   * [] take the data you receive and write it to a file in your local filesystem.
      * [] get file size by counting the characters
      * [] Use Node's fs (file system) module to write the file
[] print out a message like "Downloaded and saved 1235 bytes to ./index.html.
*/
const request = require('request');
const args = process.argv.splice(2);
const url = args[0];
const localFilePath = args[1];
const fs = require('fs');



const saveDataToFile = (path, data) => {
  console.log(data);
  fs.writeFile(path, data, (err) => {
    if (err) return err;
    console.log('savedDataToFile');
  });
};

request(url, localFilePath, (error, response, body) => {
  console.log('body:', body); // Print the HTML for the Google homepage.

  if (error) {
    console.log('error:', error); // Print the error if one occurred
    return error;
  }
  
  console.log('statusCode:', response && response.statusCode);// Print the response status code if a response was received
  saveDataToFile(localFilePath, body);
});