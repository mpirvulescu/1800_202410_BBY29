/*
Calendar
    Event00000001
        date: March 20, 2024 at 6:00:00 PM UTC-7
        event_id: 1
        hour: 2
        name: "COMP 1800"
        uid: "ezsZTUIoe5cxKLSOCsLwOSgLg4N2"
        user: "gurvirsd"

users
    user0
        email: "gurvirsd@gmail.com"
        name: "gurvirsd"
        uid: "ezsZTUIoe5cxKLSOCsLwOSgLg4N2"

        mysoccerteam@gmail.com
        Mar 7, 2024
        Mar 7, 2024
        263o0IIx1JQMMiVkR05spa1r8833

        gurvirsd@gmail.com
        Mar 6, 2024
        Mar 7, 2024
        ezsZTUIoe5cxKLSOCsLwOSgLg4N2

        alexhyeoksu@gmail.com
        Mar 4, 2024
        Mar 13, 2024
        nMsWCY6NvgTmGVRzegNSQXtzC2I2

        sequoia.alex.ca@gmail.com
        Mar 4, 2024
        Mar 4, 2024
        4ffL8p73WSgVaWPBX8vnlsoywlI2

        mark.pirvulescu@gmail.com
        Mar 4, 2024
        Mar 6, 2024
        ojgUjs9MIFbRX1V9n6wS3aMYdf03
*/

function loadEvent() {
    let eventDate = document.getElementById("calendar-div");
    let userName = document.getElementById("nav-user-name").value;
    let uidNav = "";

    db.collection("users").get()
        .then(allEvents=>{
            console.log(userName)
            allEvents.forEach(doc => {
                let name = doc.data().name;
                let uid = doc.data().uid;
                if (name == userName){
                    uidNav = uid;
                    console.log(uidNav);
                }
            })
        }
    );
    

    db.collection("Calendar").get()   //the collection called "hikes"
        .then(allEvents => {            
            allEvents.forEach(doc => { //iterate thru each doc
                if (doc.data().uid === uidNav){    
                    var date = doc.data().date;
                    var event_id = doc.data().event_id;
                    var hour = doc.data().hour;
                    var name = doc.data().name;
                    var uid = doc.data().uid;
                    var user = doc.data().user;
                    console.log(date + ", " + event_id + ", " + hour  + ", " + name  + ", " + uid + ", " + user);
                }

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-length').innerHTML = hikeLength +"km";
                newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-image').src = `./images/${hikeCode}.jpg`; //Example: NV01.jpg

                //attach to gallery, Example: "hikes-go-here"
                document.getElementById(collection + "-go-here").appendChild(newcard);

                //i++;   //Optional: iterate variable to serve as unique ID
            })
        })
}

loadEvent();  //input param is the name of the collection