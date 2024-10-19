/**
* Requests the file and executes a callback with the parsed result once
* it is available
* @param {string} path - The path to the file.
* @param {function} callback - The callback function to execute once the result is available
*/
function fetchJSONFile (path, callback) {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        const data = JSON.parse(httpRequest.responseText);
        if (callback) callback(data);
      }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
}

// call fetchJSONFile then build and render a tree
// this is the function executed as a callback when parsing is done
fetchJSONFile('for_loop_practice.json', function (data) {
  const practice = new Practice();
  practice.oneToTen();
  practice.oneToTen();
  const mySmallArray = [1,2,3,4,5,6,7,8,9,0];
  const myLongArray = [27, 5, 83, 12, 54, 73, 91, 39, 66, 7, 25, 48, 16, 34, 58, 69, 11, 94, 22, 18, 29, 81, 3, 40, 65, 78];
  
});
