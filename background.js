   chrome.alarms.create('myalaram',{periodInMinutes: 10});
   chrome.alarms.create('myalaram2',{periodInMinutes: 21.2});

chrome.alarms.onAlarm.addListener(function(alarm) {
    if(alarm.name === 'myalaram'){
    chrome.storage.sync.get(['mynotes']).then(function(items){
        
        var notes = items['mynotes'];
        let optionNotif = {
            iconUrl:"images/icon.png",
            message: notes.substring(0, 50)+' ...',
            type: "basic",
            title:'finish tasks'
            };
            chrome.notifications.create("finish tasks", optionNotif);

    });
}
if(alarm.name === 'myalaram2'){
    let optionNotif = {
        iconUrl:"images/icon.png",
        message: 'do some pushups now',
        type: "basic",
        title:'exercise'
        };
        chrome.notifications.create("exercise", optionNotif); 
}
    })