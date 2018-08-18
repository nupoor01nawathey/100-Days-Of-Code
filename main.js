// add options and get form id/class
const CLIENT_ID       = '<YOUR_KEY>' ,
      DISCOVERY_DOCS  = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"] ,
      SCOPES          = 'https://www.googleapis.com/auth/youtube.readonly' ,

      authorizeButton = document.getElementById('authorize-button') ,
      signoutButton   = document.getElementById('signout-button') ,
      content         = document.getElementById('content'),
      channelForm     = document.getElementById('channel-form'),
      channelInput    = document.getElementById('channel-input'),
      videoContainer  = document.getElementById('video-container'),
      defaultChannel  = 'Travery Media' ;


// On load, called to load the auth2 library and API client library
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

// Initializes the API client library and sets up sign-in state
function initClient() {
    gapi.client.init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES
    })
    .then( () => {
        // Listen for sign in state changes
        gapi.auth2.getAuthInstance().isSignedIn.listen(udpateSignInStatus);

        // Handle initial sign in state
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onClick = handleAuthClick;
        signoutButton.onClick   = handleSignOutClick;
    });
}

// update UI for sign in changes
function updateSigninStatus(isSignedIn){
    console.log('--------------------');
    console.log(isSignedIn);
    console.log('--------------------');

    isSignedIn
    if(isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display   = 'block';
        content.style.display         = 'block';
        videoContainer.style.display  = 'block';
        getChannel(defaultChannel);
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display   = 'none';
        content.style.display         = 'none';
        videoContainer.style.display  = 'none';
    }
}

// handle login
function handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn();
}

// handle logout
function handleSignOutClick() {
    gapi.auth2.getAuthInstance().signOut();
}


// get channel from API
function getChannel(channel) {
    console.log('*****************');
    console.log(channel);
    console.log('*****************');
}