function loadChart() {
    let chartDiv = document.getElementById("myChart");
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user.uid);
            currentUser = db.collection("users").doc(user.uid);

            db.collection("StressChecker")
                .orderBy("timestamp").get()
                .then(stress => {
                    var datas = [];
                    var dates = [];

                    stress.forEach((doc, index) => {
                        if (user.uid == doc.data().userID) {
                            datas.push(doc.data().score);
                            let date = new Date(doc.data().timestamp.seconds * 1000);
                            dates.push(date.getDate() + "/" + date.toLocaleString('default', { month: 'short' }));
                        }
                    });
                    console.log(dates[0]);

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

