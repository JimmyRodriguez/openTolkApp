//usar los valores proporcionados por la cuenta

//var apiKey = "45983002";
var apiKey="3356042";
//Secret = "cbc91611ba93464fb101722c8dd93af3540ba7eb"
var sessionId = "2_MX40NTk4MzAwMn5-MTUwODI1NDY4NDE1OH5mUk8ycjZqQnJHSFRPK0xvTzd3VUM3WkJ-fg":
var token = "T1==cGFydG5lcl9pZD00NTk4MzAwMiZzaWc9MjA5N2Q2MDBiMzk1YzI4NGE2MDQwMzBkZmViMzlhYzMzZGNmOTJlZDpzZXNzaW9uX2lkPTJfTVg0ME5UazRNekF3TW41LU1UVXdPREkxTkRZNE5ERTFPSDVtVWs4eWNqWnFRbkpIU0ZSUEsweHZUemQzVlVNM1drSi1mZyZjcmVhdGVfdGltZT0xNTA4MjU0NzE5Jm5vbmNlPTAuMDEyMDI4MTA5NDczMjkyNTgmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUwODI1ODMxOCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==":

//agregar el codigo del servidor
 /*var SERVER_BASE_URL = 'https://bichosvideo.herokuapp.com/';
    fetch(SERVER_BASE_URL + '/session').then(function(res) {
      return res.json()

    }).then(function(res) {
      apiKey = res.apiKey;
      sessionId = res.sessionId;
      token = res.token;
      initializeSession();
    }).catch(handleError);
*/
initializeSession():

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);

    //console.error();
  }
}

function initializeSession() {

  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });


  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}

https://bichosvideo.herokuapp.com/