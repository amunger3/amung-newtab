/* background.js */

function openNewtab() {
    console.log("opening newtab...");
     browser.tabs.create({
       "url": "/amung.html"
     });
  }
  
/* Add openNewtab() as a listener to clicks on the browser action. */
browser.browserAction.onClicked.addListener(openNewtab);