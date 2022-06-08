var form = document.forms.namedItem("mail");

function sendMail(event) {
    event.preventDefault();

    var data = new FormData(form);

    Email.send("seviherrmi@gmail.com",
    "seviherrmi@gmail.com",
    "Kinesiologie Termin",
    "name: " + data.name + " email: " + data.mail + " " + data.message,
    "smtp.yourisp.com",
    "seviherrmi",
    "Hallllllo6");
  }

mail.addEventListener('submit', sendMail);
