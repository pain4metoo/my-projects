import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoibWVsbG82MTAiLCJhIjoiY2tzeXVpdzR0Mmc5OTJwcG5qYjB5bXYxYiJ9.-abNLfabDvkG1IhXvoNCaQ';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/light-v10', // style URL
  center: [2.3363, 48.86091], // starting position [lng, lat]
  zoom: 15.65, // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());

const marker0 = new mapboxgl.Marker({
  color: 'black',
  draggable: true,
})
  .setLngLat([2.3364, 48.86091])
  .addTo(map);

const marker1 = new mapboxgl.Marker({
  color: '#767676',
  draggable: true,
})
  .setLngLat([2.3333, 48.8602])
  .addTo(map);

const marker2 = new mapboxgl.Marker({
  color: '#767676',
  draggable: true,
})
  .setLngLat([2.3397, 48.8607])
  .addTo(map);

const marker3 = new mapboxgl.Marker({
  color: '#767676',
  draggable: true,
})
  .setLngLat([2.333, 48.8619])
  .addTo(map);

const marker4 = new mapboxgl.Marker({
  color: '#767676',
  draggable: true,
})
  .setLngLat([2.3365, 48.8625])
  .addTo(map);
