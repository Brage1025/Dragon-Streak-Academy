document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const course = document.getElementById("course-select").value;
  const date = document.getElementById("session-date").value;

  if (!course || !date) {
    alert("Please select both a course and a date.");
    return;
  }

  const courseName =
    document.getElementById("course-select").selectedOptions[0].text;
  alert(
    `Booking request submitted!\n\nCourse: ${courseName}\nDate: ${new Date(
      date
    ).toLocaleString()}\n\nWe will contact you within 24 hours to confirm your session.`
  );

  this.reset();
});
