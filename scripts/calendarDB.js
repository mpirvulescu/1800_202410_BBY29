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



function readevent(event) {
    db.collection("Calendar").doc(event)
      .onSnapshot(eventDoc => {
           console.log("current document data: " + eventDoc.data());
           document.getElementById("quote-goes-here").innerHTML = dayDoc.data().quote;      //using javascript to display the data on the right place
           
           //Here are other ways to access key-value data fields
           //$('#quote-goes-here').text(dayDoc.data().quote);         //using jquery object dot notation
           //$("#quote-goes-here").text(dayDoc.data()["quote"]);      //using json object indexing
		       //document.querySelector("#quote-goes-here").innerHTML = dayDoc.data().quote;
      })
}
readQuote("tuesday");        //calling the function