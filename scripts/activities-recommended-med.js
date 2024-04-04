//------------------------------------------------------------------------------
// Input parameter is a string representing the collection we are reading from
//------------------------------------------------------------------------------
function displayCardsDynamically(collection) {
    let cardTemplate = document.getElementById("activitiesTemplate"); // Retrieve the HTML element with the ID "hikeCardTemplate" and store it in the cardTemplate variable. 
    console.log("function called");
    db.collection(collection)
        .where("stress-score", "<=", 9)
        .where("stress-score", ">", 4)
        .limit(3)
        .get()   //the collection called "hikes"
        .then(allActivities => {
            //var i = 1;  //Optional: if you want to have a unique ID for each hike
            allActivities.forEach(doc => { //iterate thru each doc
                var title = doc.data().name;       // get value of the "name" key
                var details = doc.data().details;  // get value of the "details" key
                let newcard = cardTemplate.content.cloneNode(true); // Clone the HTML template to create a new card (newcard) that will be filled with Firestore data.

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-text').innerHTML = details;

                //Optional: give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery, Example: "hikes-go-here"
                document.getElementById(collection + "-go-here").appendChild(newcard);

                //i++;   //Optional: iterate variable to serve as unique ID
            })
            doneButton();
        })
}

displayCardsDynamically("activities");  //input param is the name of the collection

var counter = 0;

function doneButton() {
    document.querySelectorAll('.card-href').forEach(button => {
        button.addEventListener('click', function () {
            console.log("button clicked");
            this.classList.remove('btn-primary');
            this.classList.add('btn-secondary');
            this.setAttribute('disabled', true);
            this.style.pointerEvents = 'none';
            counter += 1;
            console.log("button disabled");

            if (counter == 3) {
                localStorage.setItem('done', true);
                window.location.href = "done.html"
            }
        });
    });

}

