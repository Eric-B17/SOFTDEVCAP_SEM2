navigator.geolocation.getCurrentPosition(position => {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
    document.getElementById("locale").innerText = `latitude: ${position.coords.latitude}, longitude: ${position.coords.longitude}`
}, error => {
    console.error("Error getting location: ", error);
});