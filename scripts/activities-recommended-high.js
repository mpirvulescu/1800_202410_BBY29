
function displayCardsDynamically(collection) {
    let cardTemplate = document.getElementById("activitiesTemplate");
    console.log("function called");
    db.collection(collection)
        .where("stress-score", ">=", 10)
        .limit(3)
        .get()
        .then(allActivities => {
            allActivities.forEach(doc => {
                var title = doc.data().name;
                var details = doc.data().details;
                let newcard = cardTemplate.content.cloneNode(true);

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-text').innerHTML = details;

                //collection data into html
                document.getElementById(collection + "-go-here").appendChild(newcard);               
            })
            doneButton(); 
        })
}

displayCardsDynamically("activities");

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