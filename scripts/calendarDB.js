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

function addEvent() {
    //define a variable for the collection you want to create in Firestore to populate data
    var eventRef = db.collection("Calendar");
    var userRef = db.collection("users");
    let minEventId = 0;

    eventRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const id = data.event_id;
            if (id === minEventId){
                minEventId++;
            }
        });
        console.log("Smallest ID for event_id: ", minEventId);
    })

    let userName = document.getElementById("nav-user-name").textContent;
    let taskName = document.getElementById("name").value;
    let taskHour = document.getElementById("count").value;

    userRef.get().then((querySnapshot) => {
        const uidSelect = "";
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            let user = data.name;
            let uid = data.uid;
            if (userName == user){
                uidSelect = uid;
            }
        })
    })

    eventRef.add({
        event_id: minEventId,
        hour: taskHour,
        name: taskName,
        uid: uidSelect,
        user: userName,
    });
}
document.getElementById("ok-button").addEventListener("click", function() {
    addEvent();
    console.log("ok button clicked!");
});


function loadEvent(collection) {
    let eventDate = document.getElementById("calendar-div");

    db.collection(collection).get()   //the collection called "hikes"
        .then(allEvents => {
            
            allEvents.forEach(doc => { //iterate thru each doc
                var event_id = doc.data().event_id;
                var hour = doc.data().hour;
				var name = doc.data().name;
                var uid = doc.data().uid;
                let user = doc.data().user;
                
                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-length').innerHTML = hikeLength +"km";
                newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-image').src = `./images/${hikeCode}.jpg`; //Example: NV01.jpg

                //Optional: give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery, Example: "hikes-go-here"
                document.getElementById(collection + "-go-here").appendChild(newcard);

                //i++;   //Optional: iterate variable to serve as unique ID
            })
        })
}

loadEvent("Calendar");  //input param is the name of the collection