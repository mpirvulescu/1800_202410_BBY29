function displayCardsDynamically(collection) {
    let cardTemplate = document.getElementById("activitiesTemplate");
    console.log("function called");
    db.collection(collection)
        .where("stress-score", "<=", 9)
        .where("stress-score", ">", 4)
        .limit(3)
        .get()
        .then(allActivities => {
            allActivities.forEach(doc => { //iterate thru each doc
                var title = doc.data().name;       // get value of the "name" key
                var details = doc.data().details;  // get value of the "details" key
                let newcard = cardTemplate.content.cloneNode(true); // Clone the card HTML template filled with Firestore data.

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-text').innerHTML = details;

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
            })
            doneButton();
        })
}

displayCardsDynamically("activities");  //param is the name of the collection

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

