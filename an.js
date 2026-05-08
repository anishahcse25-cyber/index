window.onload = function () {

    document.getElementById("contactForm").onsubmit = function(event) {
        event.preventDefault();

        var name = document.querySelector('input[type="text"]').value;
        var email = document.querySelector('input[type="email"]').value;
        var phone = document.querySelectorAll('input[type="text"]')[1].value;
        var service = document.querySelector("select").value;
        var message = document.querySelector("textarea").value;

        localStorage.setItem("Name", name);
        localStorage.setItem("Email", email);
        localStorage.setItem("Phone", phone);
        localStorage.setItem("Service", service);
        localStorage.setItem("Message", message);

        alert("Your inquiry has been submitted successfully!");

        console.log("Stored Data:");
        console.log(localStorage.getItem("Name"));
        console.log(localStorage.getItem("Email"));
        console.log(localStorage.getItem("Phone"));
        console.log(localStorage.getItem("Service"));
        console.log(localStorage.getItem("Message"));
    };

};