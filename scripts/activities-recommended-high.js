function displayCardsDynamically(collection) {
    let cardTemplate = document.getElementById("activitiesTemplate");
    console.log("function called");
    db.collection(collection)
        .where("stress-score", ">=", 10)                // Query of database to check appropriate stress score 
        .limit(3)                                       // Query of database to limit to 3 activities
        .get()                                          // Read from firestore to receive user stress score
        .then(allActivities => {
            allActivities.forEach(doc => {
                var title = doc.data().name;            // Name of activity
                var details = doc.data().details;       // Details of activity
                let newcard = cardTemplate.content.cloneNode(true);

                newcard.querySelector('.card-title').innerHTML = title;     // Places activity name into card
                newcard.querySelector('.card-text').innerHTML = details;    // Places activity details into card

                document.getElementById(collection + "-go-here").appendChild(newcard);               
            })
            doneButton(); 
        })
}

displayCardsDynamically("activities");

var counter = 0;

// Function to disable the done button after activity is finished
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

            // Once all three buttons are clicked there will be an automatic redirection to the done page
            if (counter == 3) {
                localStorage.setItem('done', true);     // Writes to local storage - we did not finish this feature
                window.location.href = "done.html"      // Redirection to done page only when all activities are finished
            }
        });
    });
}