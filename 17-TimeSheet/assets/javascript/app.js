var firebaseConfig = {
    apiKey: "AIzaSyApDdCPN56VbI5okIK2q7FFTNG0kb45rhw",
    authDomain: "optimum-octane-160404.firebaseapp.com",
    databaseURL: "https://optimum-octane-160404.firebaseio.com",
    projectId: "optimum-octane-160404",
    storageBucket: "optimum-octane-160404.appspot.com",
    messagingSenderId: "851843120819",
    appId: "1:851843120819:web:9f061d233efb70e9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)


// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();
$("#submitId").on("click", function (event) {
    event.preventDefault();
    var myName = $("#employeeName").val();
    var myRole = $("#role").val();
    var myStartDate = $("#startDate").val();
    var myMonthlyRate = $("#monthlyRate").val();
    console.log(getDateNow(myStartDate));




    database.ref().push({
        name: myName,
        role: myRole,
        startDate: myStartDate,
        monthlyRate: myMonthlyRate
    });
});
database.ref().on("child_added", function (snapshot) {
    var myName = snapshot.val().name;
    var myRole = snapshot.val().role;
    var myStartDate = snapshot.val().startDate;
    var myMonthlyRate = snapshot.val().monthlyRate;

    var today = moment(new Date());
    var startDateInput = moment(myStartDate, "MM/DD/YYYY");
    var monthsWorked = today.diff(startDateInput, "months");
    var totalBilled = monthsWorked * myMonthlyRate;

    var trNode = $("<tr>");
    trNode.append($("<td>").text(myName));
    trNode.append($("<td>").text(myRole));
    trNode.append($("<td>").text(myStartDate));

    trNode.append($("<td>").text(monthsWorked));
    trNode.append($("<td>").text(myMonthlyRate));
    trNode.append($("<td>").text(totalBilled));
    $("tbody").append(trNode);

});

// function getDateNow(dateStr) {
//     var date = new Date(dateStr);

//     console.log(date);
//     return date.getMonth(), date.getDate();


    // var month = date.getMonth();
    // var day = date.getDate();
    // var year = date.getFullYear();


// }
//console.log(momment("myStartDate", "MM/DD/YYYY").fromNow());
// var today = moment(new Date());
// var startDateInput = moment(myStartDate, "MM/DD/YYYY");
// today.diff(startDateInput);


