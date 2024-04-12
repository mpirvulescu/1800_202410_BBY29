//this js loads a data of currently logged in user's previous stress submit history
//by checking through the entire StressChecker collection but picking up logged user's data
function loadChart() {
    let chartDiv = document.getElementById("myChart");
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user.uid);
            currentUser = db.collection("users").doc(user.uid);

            //check collection StressChecker in most recent order
            db.collection("StressChecker")
                .orderBy("timestamp").get()     // Firestore query by timestamp
                .then(stress => {
                    var datas = [];
                    var dates = [];

                    //check every data but put in array only when user data matches with currently logged user
                    stress.forEach((doc, index) => {
                        if (user.uid == doc.data().userID) {
                            datas.push(doc.data().score);
                            let date = new Date(doc.data().timestamp.seconds * 1000);
                            dates.push(date.getDate() + "/" + date.toLocaleString('default', { month: 'short' }));
                        }
                    });
                    console.log(dates[0]);

                    //insert the array into chart graph
                    let ctx = document.getElementById("myChart").getContext("2d");
                    let myChart = new Chart(ctx, {
                        type: "line",
                        data: {
                            labels: dates,
                            datasets: [
                                {
                                    label: "Stress level",
                                    data: datas,
                                    backgroundColor: "rgba(153,205,1,0.6)",
                                },
                            ],
                        },
                    });
                    chartDiv.innerText = myChart;
                })

        } else {
            // No user is signed in.
            console.log("No user is signed in");
            window.location.href = "login.html";
        }
    })
}

loadChart();

