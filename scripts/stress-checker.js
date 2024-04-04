
function saveStressScore(sum) {
  console.log(sum);
  console.log("function called");
  localStorage.setItem('stress-score', sum);
  // window.location.href = 'stress-level-checked.html';
}

function stressScore() {
  console.log("function called!");

  document.getElementById('submit').addEventListener('click', function () {
    const input1 = Number(document.getElementById('input1').value);
    const input2 = Number(document.getElementById('input2').value);
    const input3 = Number(document.getElementById('input3').value);

    const sum = input1 + input2 + input3;

    console.log(sum);
    saveStressScore(sum);

    var user = firebase.auth().currentUser;
    if (user) {
      db.collection("StressChecker").add({
        score: sum,
        userID: user.uid,
        name: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).then(() => {
        if (sum < 4) {
          window.location.href = "stress-lowStress.html"
        } else if (sum >= 5 && sum < 10) {
          window.location.href = "stress-medStress.html"
        } else if (sum >= 10) {
          window.location.href = "stress-highStress.html"
        } else {
          window.location.href = "stress-level-checked.html";
        }
      }).catch((error) => {
        console.error("Error adding document: ", error);
      });
    } else {    // use this else statement code for when users are not logged in!
      console.log("No user is signed in");
      window.location.href = 'index.html';
    }
  });
}
stressScore();



