const map = L.map('map', {
  zoomControl: false,
}).setView([41.481316, -71.310360], 13);

const customIcon = L.icon({
  iconUrl: './assets/images/icon-location.svg',
  iconSize: [66, 88], // tamanho do ícone
  iconAnchor: [33, 88], // ponto de ancoragem do ícone
  popupAnchor: [0, 0] // ponto onde aparecerá o popup em relação ao ícone
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.marker(
  [41.481316, -71.310360], 
  {icon: customIcon},
  {alt: 'Modern Art Gallery'},
).addTo(map).bindPopup('Modern Art Gallery');

L.control.zoom({position: 'bottomright',}).addTo(map);

map.attributionControl.setPrefix(false);