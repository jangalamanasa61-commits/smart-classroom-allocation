document.getElementById('classForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const className = document.getElementById('className').value;
    const students = parseInt(document.getElementById('students').value);
    const output = document.getElementById('output');

    let roomAssigned = '';

    if (students <= 30) {
        roomAssigned = 'Room 101 (Small Classroom)';
    } else if (students <= 60) {
        roomAssigned = 'Room 201 (Medium Lecture Hall)';
    } else if (students <= 120) {
        roomAssigned = 'Auditorium A (Large Hall)';
    } else {
        roomAssigned = 'No single room available for this strength!';
    }

    output.innerHTML = `<strong>Class:</strong> ${className}<br>
                        <strong>Students:</strong> ${students}<br>
                        <strong>Allocation:</strong> ${roomAssigned}`;
    output.style.background = '#d4edda';
    output.style.color = '#155724';
});
