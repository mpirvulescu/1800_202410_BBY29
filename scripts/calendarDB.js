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

    let user = ;

    eventRef.add({
        event_id: minEventId,
        hour: ;
        name: ;
        uid: ;
        user: ;
    })

    eventRef.add({
        event_id: 1,
        name: "Burnaby Lake Park Trail", //replace with your own city?
        city: "Burnaby",
        province: "BC",
        level: "easy",
				details: "A lovely place for lunch walk",
        length: 10,          //number value
        hike_time: 60,       //number value
        lat: 49.2467097082573,
        lng: -122.9187029619698,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  //current system time
    });
}


//------------------------------------------------------------------------------
// Input parameter is a string representing the collection we are reading from
//------------------------------------------------------------------------------
function displayEventOnCalendar(collection) {
    let eventDate = document.getElementById("hikeCardTemplate"); // Retrieve the HTML element with the ID "hikeCardTemplate" and store it in the cardTemplate variable. 

    db.collection(collection).get()   //the collection called "hikes"
        .then(allHikes=> {
            //var i = 1;  //Optional: if you want to have a unique ID for each hike
            allHikes.forEach(doc => { //iterate thru each doc
                var title = doc.data().name;       // get value of the "name" key
                var details = doc.data().details;  // get value of the "details" key
								var hikeCode = doc.data().code;    //get unique ID to each hike to be used for fetching right image
                var hikeLength = doc.data().length; //gets the length field
                let newcard = cardTemplate.content.cloneNode(true); // Clone the HTML template to create a new card (newcard) that will be filled with Firestore data.

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

displayCardsDynamically("hikes");  //input param is the name of the collection