// document.getElementById('submit').addEventListener('click', function() {
//     const input1 = Number(document.getElementById('input1').value);
//     const input2 = Number(document.getElementById('input2').value);
//     const input3 = Number(document.getElementById('input3').value);
    
//     const sum = input1 + input2 + input3;

//     // Send the sum to Firebase
//     db.collection("StressChecker").doc("StressScore").set({
//       score: sum
//     }).then(() => {
//       console.log('Sum sent to Firebase');
//     }).catch((error) => {
//       console.error('Error sending sum to Firebase:', error);
//     });

//     function saveStressScore(){
//       console.log(sum);
//       console.log("function called");
//       localStorage.setItem('stress-score', sum);
//       window.location.href = 'stress-level-checked.html';
//     }
//     saveStressScore();

//   });

// above is recoded below

function stressScore() {
  console.log("function called!");

  document.getElementById('submit').addEventListener('click', function() {
    const input1 = Number(document.getElementById('input1').value);
    const input2 = Number(document.getElementById('input2').value);
    const input3 = Number(document.getElementById('input3').value);
  
    const sum = input1 + input2 + input3;
    console.log(sum);

    var user = firebase.auth().currentUser;
    if (user) {
      db.collection("StressChecker").add({
        score: sum,
        userID: user.uid, 
        name: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).then(() => {
        if(sum < 4){
          window.location.href = "stress-lowStress.html"
        } else if(sum >= 4 && sum < 7){
          window.location.href = "stress-medStress.html"
        } else if(sum >= 7){
          window.location.href = "stress-highStress.html"
        } else {
          window.location.href = "stress-level-checked.html";
        }
      }).catch((error) => {
        console.error("Error adding document: ", error);
      });
    } else {// use this else statement code for when users are not logged in!
      console.log("No user is signed in");
      window.location.href = 'index.html';
    }
  });
}
stressScore();



