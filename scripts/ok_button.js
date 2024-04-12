//This js was planned to submit an event info to firebase collection
//It works but not used in MVP

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
