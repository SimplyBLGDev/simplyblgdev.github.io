loadPage();

function loadPage() {
    var xhttp = new XMLHttpRequest();
    var content = document.getElementById("Content").innerHTML;
    var footer = null;
    if (document.getElementById("Footer") != null) {
        footer = document.getElementById("Footer").innerHTML;
    }
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("base").innerHTML = this.responseText;
        document.getElementById("Content").innerHTML = content;
        if (footer != null) {
            document.getElementById("Footer").innerHTML = footer;
        }
    }
    };
    xhttp.open("GET", "/pages/globalPage.html", true);
    xhttp.send();
}
