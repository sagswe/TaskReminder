chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    
    chrome.storage.sync.get(['mynotes']).then(function(items){
        
        notes = items['mynotes'];
        if(!notes)
        {
            notes = ""
        }
        document.getElementById('notes').value = notes ;
    });
});

document.getElementById('saveButton').onclick = function(){
    /*
    Gets Notes and saves them in persistance storage.
    * and saves in cloud using rest.
    */
   var notes = document.getElementById('notes').value;    


        chrome.storage.sync.set({'mynotes':notes}).then( function(){
            window.close();
        });
         fetch('https://retoolapi.dev/OQM2bK/devjourney', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({time: new Date(), task: notes})
          }).then((response) => {
            return response.json();
          }).catch((err) => {
            console.log(err);
          });
}