loadPage();

function loadPage() {
    var xhttp = new XMLHttpRequest();
    var content = document.getElementById("Content").innerHTML;
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("base").innerHTML = this.responseText;
        document.getElementById("Content").innerHTML = content;
    }
    };
    xhttp.open("GET", "./pages/globalPage.html", true);
    xhttp.send();
}
