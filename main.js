
var map = L.map('mapid').setView([7.8731, 80.7718], 8);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiaWJhbmV6aWFubyIsImEiOiJjazJ1emk1cTAxcjc0M25scmNjaHNvamxhIn0.Qgl1FpIEd4XnPUCbhKCm5Q',
}).addTo(map);

function hospitalLocator(feature,
    layer) {
    const location = feature.properties.name
    if (location === null) {
        layer.bindPopup(`${feature.geometry.coordinates[0]}, ${feature.geometry.coordinates[1]}`);
    } else {
        layer.bindPopup(feature.properties.name);
    }
};



L.geoJson(hospitalData, {
    onEachFeature: hospitalLocator
}).addTo(map);



