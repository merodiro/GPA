var coursesNo;

function displayCourses() {
    coursesNo = document.getElementById("coursesNo").value;
    var container = document.getElementById("courses"),
        total = 0,
        hours = 0;
    if (coursesNo === "") {
        window.alert("please enter some values");
        return;
    } else {
        /* while (container.hasChildNodes()) {
             container.removeChild(container.lastChild);
         }*/
        for (i = 1; i <= coursesNo; i++) {
            var course = document.createElement("label");
            var text = document.createTextNode("course" + i);
            course.appendChild(text);
            container.appendChild(course);
            var grades = document.createElement("span");
            grades.innerHTML = " <select id=\"course" + i + "\"><option disabled selected value=\"0\">-- Choose a grade --</option><option value=\"4>\">A+</option><option value=\"3.75>\">A</option><option value=\"3.4>\">B+</option><option value=\"3.1>\">B</option><option value=\"2.8>\">C+</option><option value=\"2.5>\">C</option><option value=\"2.25>\">D+</option><option value=\"2>\">D</option></select>";
            container.appendChild(grades);
            var hours = document.createElement("span");
            hours.innerHTML = " <select id=\"hour" + i + "\"><option disabled selected value=\"0\">-- Choose hours --</option><option value=\"3>\">3</option><option value=\"2>\">2</option></select>";
            container.appendChild(hours);
            container.appendChild(document.createElement("br"));

        }
        var btn = document.createElement("button");
        var text2 = document.createTextNode("calculate");
        btn.appendChild(text2);
        btn.id = "calc";
        btn.type = "button";
        btn.onclick = function () {
            displayResults();
        };
        container.appendChild(btn);
        document.getElementById("courses").style.display = "block";
        //        document.getElementById("calc").style.display = "block";

    }
}

function displayResults() {
    var totalHours = 0,
        gpa = 0,
        totalGrades = 0;
    var course = [];
    var hour = [];
    var total = [];
    for (i = 1; i <= coursesNo; i++) {
        course[i] = document.getElementById("course" + i).value;
        hour[i] = document.getElementById("hour" + i).value;
        total[i] = parseFloat(course[i]) * parseFloat(hour[i]);
        totalHours += parseFloat(hour[i]);
        totalGrades += total[i];
    }
    for (i = 1; i <= coursesNo; i++) {
        if (course[i] == 0 || hour[i] == 0) {
            window.alert("please enter some values");
            return;
        } else {
            gpa = totalGrades / totalHours;
            gpa = Math.round(gpa * 100) / 100;
            gpa = gpa.toFixed(2);
            console.log(gpa);
        }
    }
    document.getElementById("totalGPA").style.display = "block";
    document.getElementById("GPA").innerHTML = gpa;
}
document.getElementById("totalGPA").style.display = "none";
document.getElementById("courses").style.display = "none";
//document.getElementById("calc").style.display = "none";
document.getElementById("calculate").onclick = function () {
    displayCourses();
};
//document.getElementById("calc").onclick = function () {
//    displayResults();
//};