async function validateCertificate() {
  const enteredID = document.getElementById("certificateId").value;
  const response = await fetch("cert.json");
  const data = await response.json();

  if (data.some((cert) => cert["Certificate ID"] === enteredID)) {
    document.getElementById("validationResult").textContent =
      "Valid Certificate ID";
    document.getElementById("validationResult").className = "valid";
  } else {
    document.getElementById("validationResult").textContent =
      "Invalid Certificate ID";
    document.getElementById("validationResult").className = "invalid";
  }
}
