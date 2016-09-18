
$.getScript("https://apis.google.com/js/api.js")
  .done(function(script, textStatus){
    console.log(textStatus);
    onLoad();
  });

  function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
  }

  function makeRequest() {
    var request = gapi.client.youtube.search.list({
      part: 'snippet'
    })

     request.execute(onSearchResponse);
  }

  function onSearchResponse(response) {
    showResponse(response);
  }

  function init(){
    gapi.client.setApiKey("AIzaSyCS5aVDymNuz_3IIatcv2HucL5Wi9aPSzU");
    gapi.client.load('youtube', 'v3', function(){
      makeRequest();
    })
  }

  function onLoad(){
    gapi.load("client", init);
  }





    // function showResponse(response) {
    //     var responseString = JSON.stringify(response, '', 2);
    //     document.getElementById('response').innerHTML += responseString;
    // }
    //
    // function onClientLoad(){
    //   console.log("cats")
    //   gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
    // }
    //
    // function onYouTubeApiLoad() {
    //   gapi.client.setApiKey("AIzaSyDzjWB4tUUiUDz_CIh5WVvuh9Ny6-h7DuA")
    //   search();
    // }
    //
    // function search() {
    //   var request = gapi.client.youtube.search.list({
    //     part: 'id'
    //   })
    //
    //   request.execute(onSearchResponse);
    // }
    //
    // // Called automatically with the response of the YouTube API request.
    // function onSearchResponse(response) {
    //    showResponse(response);
    // }
