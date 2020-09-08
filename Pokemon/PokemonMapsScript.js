loadMap("Kanto");

function loadMap(regionName) {
    var region = getRegionJSON(regionName);
    var mapElement = document.getElementById("gameMap");

    for (var i = 0; i < region.maps.length; i++) {
        var newArea = document.createElement("area");
        var x = region.maps[i].dimensions[0];
        var y = region.maps[i].dimensions[1];
        var x2 = x + region.maps[i].dimensions[2];
        var y2 = y + region.maps[i].dimensions[3];

        newArea.shape = "rect";
        newArea.coords = x + ", " + y + ", " + x2 + ", " + y2;
        newArea.alt = region.maps[i].name;
        newArea.href = "#";
        mapElement.appendChild(newArea);
    }
}

function getRegionJSON(regionName) {
    var r;
    switch(regionName) {
        case "Kanto":
            r = "KantoMaps.json";
            break;
        default:
            console.log("Invalid Region");
            return;
    }

    var JSONPath = "/Pokemon/Maps/" + r;

    return GETParsedJSON(JSONPath);
}

function GETParsedJSON(path) {
    var request = new XMLHttpRequest();
    request.open("GET", path, false);
    request.send();
    if (request.status == 200) {
        return JSON.parse(request.responseText);
    }

    return null;
}
