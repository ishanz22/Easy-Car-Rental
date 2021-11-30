$("#btnAdmin").click(function () {
    let user = $("#user").val();
    let password = $("#pass").val();
    if (user === "admin" && password === "1234") {
        location.href = "MainForm.html";
    } else {
        alert("Wrong Secret Code Or Password");

    }
}
)
