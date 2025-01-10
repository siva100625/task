function calculateGrade() {
    let marks = prompt("Enter Marks (0-100):");
    marks = parseInt(marks);
    let grade;

    switch (true) {
        case (marks >= 90 && marks <= 100):
            grade = 'A+';
            break;
        case (marks >= 80 && marks < 90):
            grade = 'A';
            break;
        case (marks >= 70 && marks < 80):
            grade = 'B+';
            break;
        case (marks >= 60 && marks < 70):
            grade = 'B';
            break;
        case (marks >= 50 && marks < 60):
            grade = 'C';
            break;
        default:
            grade = 'F';
    }

    alert("Your Grade is: " + grade);
}

calculateGrade();
