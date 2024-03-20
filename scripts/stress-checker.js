document.getElementById('submit').addEventListener('click', function() {
    const input1 = Number(document.getElementById('input1').value);
    const input2 = Number(document.getElementById('input2').value);
    const input3 = Number(document.getElementById('input3').value);
    
    const sum = input1 + input2 + input3;

    // Send the sum to Firebase
    db.collection("StressChecker").doc('StressScore').set({
      score: sum
    }).then(() => {
      console.log('Sum sent to Firebase');
    }).catch((error) => {
      console.error('Error sending sum to Firebase:', error);
    });
  });