document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const firstname = document.getElementById("fnameid");
    const lastname = document.getElementById("lnameid");
    const mailaddress = document.getElementById("emailid");
    const messagesubject = document.getElementById("subjectid");
    const messagecontent = document.getElementById("contentid");
    const error = document.getElementById("errorContainer");
    //alert("script loaded");

    function displayerror(element, message) {
        const errortexttag = document.createElement("p");
        errortexttag.classList.add("error");
        errortexttag.textContent = message; 
        element.classList.add("errorborder");
        element.insertAdjacentElement("afterend", errortexttag);
    }
    function initerrors() {
        const errors = document.querySelectorAll(".error");
        errors.forEach((error) => error.remove())
        const inputs = document.querySelectorAll(".errorborder");
        inputs.forEach((input) => input.classList.remove("errorborder"));
    }

    form.addEventListener("submit", function(event) {
        initerrors();
        console.log("submitted the form, checking errors.")
        let noerror = true;
        if (!firstname.ariaValueMax.trim()) {
            noerror = false;
            displayerror(firstname, "First name required");
        }
        if (!lastname.ariaValueMax.trim()) {
            noerror = false;
            displayerror(lastname, "Last name required");
        }
        if (!mailaddress.ariaValueMax.trim()) {
            noerror = false;
            displayerror(mailaddress, "Email required");
        }
        if (!messagesubject.ariaValueMax.trim()) {
            noerror = false;
            displayerror(messagesubject, "Subject required");
        }
        if (!messagecontent.ariaValueMax.trim()) {
            noerror = false;
            displayerror(messagecontent, "Content required");
        }
        if (!noerror) {
            event.preventDefault();
        }
    });
});