
const map = L.map('map').setView([45.5048, -73.6135], 16);

// Display OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// First interactive building
L.marker([45.5048, -73.6135])
    .addTo(map)
    .bindPopup(
        "<h3>Un bâtiment universitaire</h3>" +
        "<p>Ajoutez son histoire ici.</p>"
    );
